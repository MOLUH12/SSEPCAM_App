<template>
    <div class="flex justify-center items-center">
      <div id="map" 
           class="border-4 border-purple-500 rounded-lg shadow-2xl transition-transform transform hover:scale-110 hover:shadow-3xl focus-within:ring-4 focus-within:ring-purple-400 focus-within:ring-opacity-50" 
           style="height: 400px; width: 100%; max-width: 800px">
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import 'leaflet.markercluster/dist/MarkerCluster.css'; 
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
  import 'leaflet.markercluster'; 
  import { useReportStore } from '@/stores/reportStore';
  
  export default {
    name: 'Map',
    setup() {
      const reportStore = useReportStore();
      const map = ref(null);
      const markersLayer = ref(L.markerClusterGroup());
      const bounds = ref(null);
  
      // Fonction pour choisir une couleur dégradée en fonction de la position dans le temps
      const getColorByOrder = (order, total) => {
        const hue = Math.floor((order / total) * 120); // De rouge (0) à vert (120)
        return `hsl(${hue}, 100%, 50%)`; // Couleurs dégradées du rouge au vert
      };
  
      const loadReports = async () => {
        await reportStore.fetchReports(); // Récupérer les rapports
        markersLayer.value.clearLayers();
        bounds.value = L.latLngBounds();
  
        // Trier les rapports par date croissante
        const sortedReports = [...reportStore.reports].sort((a, b) => new Date(a.date) - new Date(b.date));
  
        // Créer un tableau pour stocker les positions des marqueurs afin de tracer une ligne entre eux
        const latlngs = [];
  
        // Ajouter des marqueurs pour chaque rapport, en fonction de l'ordre de soumission
        sortedReports.forEach((report, index) => {
          if (report.latitude && report.longitude) {
            // Calculer la couleur en fonction de l'ordre d'apparition
            const color = getColorByOrder(index + 1, sortedReports.length);
  
            // Créer un cercle au lieu d'un simple marqueur pour représenter le cas avec une couleur
            const marker = L.circleMarker([report.latitude, report.longitude], {
              color: color,
              radius: 10,
              fillOpacity: 0.8
            }).bindPopup(`
                <b>${report.name}</b><br>
                Symptômes : ${report.symptoms}<br>
                Date : ${new Date(report.date).toLocaleDateString()}<br>
                Ordre d'apparition : ${index + 1}
              `);
  
            markersLayer.value.addLayer(marker); // Ajouter chaque marqueur au groupe
            latlngs.push([report.latitude, report.longitude]); // Ajouter à la liste des latitudes/longitudes
  
            // Étendre les limites de la carte pour inclure ce marqueur
            bounds.value.extend([report.latitude, report.longitude]);
          }
        });
  
        // Ajouter les marqueurs à la carte
        markersLayer.value.addTo(map.value);
  
        // Tracer une ligne entre les marqueurs pour représenter la propagation
        if (latlngs.length > 1) {
          const polyline = L.polyline(latlngs, { color: 'blue', weight: 2 });
          polyline.addTo(map.value);
        }
  
        // Ajuster la vue pour afficher tous les marqueurs
        if (bounds.value.isValid()) {
          map.value.fitBounds(bounds.value, { padding: [50, 50] });
        }
      };
  
      onMounted(() => {
        // Initialiser la carte centrée sur le Cameroun
        map.value = L.map('map').setView([3.8480, 11.5021], 7);
  
        // Ajouter les tuiles de la carte (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '© OpenStreetMap contributors'
        }).addTo(map.value);
  
        // Charger les rapports et les marqueurs initiaux
        loadReports();
  
        // Mettre à jour les rapports et les marqueurs toutes les 10 secondes
        setInterval(loadReports, 10000);
      });
    }
  };
  </script>
  
  <style scoped>
  #map {
    background-color: #f0f4f8; /* Soft background for loading state */
  }
  
  .transition-transform {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover\:scale-110:hover {
    transform: scale(1.10); /* Zoom increased to 1.10 */
  }
  .hover\:shadow-3xl:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  </style>
  