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
import 'leaflet.markercluster/dist/MarkerCluster.css'; // Importer les styles de markercluster
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster'; // Importer la bibliothèque markercluster
import { useReportStore } from '@/stores/reportStore';

export default {
  name: 'Map',
  setup() {
    const reportStore = useReportStore();
    const map = ref(null);
    const markersLayer = ref(L.markerClusterGroup()); // Utiliser markerClusterGroup au lieu de layerGroup
    const bounds = ref(null); // Pour gérer les limites de la carte

    const loadReports = async () => {
      await reportStore.fetchReports(); // Récupérer les rapports

      // Nettoyer la couche des anciens marqueurs
      markersLayer.value.clearLayers();

      // Créer un objet pour ajuster les limites de la carte
      bounds.value = L.latLngBounds();

      // Ajouter des nouveaux marqueurs pour chaque rapport
      reportStore.reports.forEach(report => {
        if (report.latitude && report.longitude) {
          const marker = L.marker([report.latitude, report.longitude])
            .bindPopup(`
              <b>${report.name}</b><br>
              Symptômes : ${report.symptoms}<br>
              Date : ${report.date}
            `);
          markersLayer.value.addLayer(marker); // Ajouter chaque marqueur au groupe

          // Étendre les limites de la carte pour inclure ce marqueur
          bounds.value.extend([report.latitude, report.longitude]);
        }
      });

      // Ajouter la couche des marqueurs sur la carte
      markersLayer.value.addTo(map.value);

      // Si des marqueurs ont été ajoutés, ajuster la vue pour afficher tous les marqueurs
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

      // Mettre à jour les rapports et les marqueurs toutes les 10 secondes (ou selon ton besoin)
      setInterval(loadReports, 10100); // Rafraîchit toutes les 10 secondes
    });
  }
};
</script>

<style scoped>
#map {
  background-color: #f0f4f8; /* Soft background for loading state */
}

/* Adding smooth transitions for hover effects */
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
