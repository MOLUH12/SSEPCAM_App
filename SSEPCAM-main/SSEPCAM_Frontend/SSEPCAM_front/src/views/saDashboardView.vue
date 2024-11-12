<template>
    <div class="super-admin-dashboard">
      <!-- Sidebar étendu sur toute la page, éléments alignés en haut -->
      <div class="sidebar">
        <h2>SSEPCAM</h2>
        <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
                    <div class="h-auto">
                        <RouterLink :to="{'name': 'home'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <span class="ml-2">HOME</span>
                        </RouterLink>

                        <RouterLink :to="{'name': 'login'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span class="ml-2">login</span>
                        </RouterLink>

                        <RouterLink :to="{'name': 'Carto'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                            <span class="ml-2">Cartographier cas suspect</span>
                        </RouterLink>

                        <RouterLink :to="{'name': 'Visauliser'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span class="ml-2">Visauliser cas suspect</span>
                        </RouterLink>
                        <RouterLink :to="{'name': 'propagation'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span class="ml-2">Suivre propagation épidémie</span>
                        </RouterLink>

                        <RouterLink :to="{'name': 'validation'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>

                            <span class="ml-2">validation cas suspect</span>
                        </RouterLink>
                        <RouterLink :to="{'name': 'signup'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>

                            <span class="ml-2">Gérer compte</span>
                        </RouterLink>
                        <RouterLink :to="{'name': 'validation'}" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-black">   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <span class="ml-2">Configurer le système</span>
                        </RouterLink>
                    </div>
                </div>
      </div>
  
      <!-- Content -->
      <div class="content">
        <div class="header">
          <h1>Super Administrator Dashboard</h1>
        </div>
  
        <!-- Statistiques des rapports avec des icônes SVG -->
        <div class="stats">
          <div class="stat-box" v-for="stat in stats" :key="stat.label">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 16h-1v-4h-1m1 4v-4m0-6h.01M12 8h.01M19 8h.01M5 8h.01M8 8h.01M16 8h.01M15 12H9v-4H7v4H6v2h6v-2H9v2h6v-4h-2v2h-1v-2h2v2h-1v-2z" />
              </svg>
            </div>
            <div>
              <h3>{{ stat.label }}</h3>
              <p>{{ stat.value }}</p>
            </div>
          </div>
        </div>
  
        <!-- Graphiques -->
        <div class="charts">
          <div class="chart" v-for="chart in charts" :key="chart.id">
            <canvas :id="chart.id"></canvas>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, reactive } from 'vue';
  import { useReportStore } from '@/stores/reportStore';
  import Chart from 'chart.js/auto';
  
  export default {
    setup() {
      const reportStore = useReportStore();
  
      // Charger les rapports à partir du store
      onMounted(() => {
        reportStore.fetchReports();
      });
  
      // Statistiques pour les rapports basées sur les données récupérées
      const stats = reactive([
        { label: 'Total Reports', value: reportStore.reports.length },
        { label: 'Validated Reports', value: reportStore.reports.filter((r) => r.status === 'validated').length },
        { label: 'Pending Reports', value: reportStore.reports.filter((r) => r.status === 'pending').length },
        { label: 'Rejected Reports', value: reportStore.reports.filter((r) => r.status === 'rejected').length },
      ]);
  
      // Graphiques à afficher
      const charts = reactive([
        { id: 'lineChart', type: 'line', data: [] },
        { id: 'doughnutChart', type: 'doughnut', data: [] },
        { id: 'areaChart', type: 'line', data: [] }, // Nouveau graphique à aire
        { id: 'barChart', type: 'bar', data: [] },
        { id: 'geoDistributionChart', type: 'bubble', data: [] } // Nouveau graphique à bulles pour distribution géographique
      ]);
  
      // Chargement des données du store et génération des graphiques
      onMounted(() => {
        generateCharts(reportStore, charts);
      });
  
      return {
        stats,
        charts,
      };
    }
  };
  
  // Fonction pour générer les graphiques
  function generateCharts(reportStore, charts) {
    // Graphique en ligne pour les cas hebdomadaires
    new Chart(document.getElementById('lineChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Cases Reported Weekly',
          data: getWeeklyReports(reportStore),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true }
        }
      }
    });
  
    // Graphique en anneau pour le statut des rapports
    new Chart(document.getElementById('doughnutChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Validated', 'Pending', 'Rejected'],
        datasets: [{
          label: 'Report Status',
          data: [
            reportStore.reports.filter((r) => r.status === 'validated').length,
            reportStore.reports.filter((r) => r.status === 'pending').length,
            reportStore.reports.filter((r) => r.status === 'rejected').length
          ],
          backgroundColor: ['#36a2eb', '#ffce56', '#ff6384'],
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        animation: {
          animateRotate: true,
          duration: 1500
        }
      }
    });
  
    // Graphique à aire pour la tendance des symptômes
    new Chart(document.getElementById('areaChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Fever', 'Cough', 'Fatigue', 'Headache'],
        datasets: [{
          label: 'Symptom Trends',
          data: getSymptomData(reportStore),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
          easing: 'easeOutElastic'
        }
      }
    });
  
    // Graphique en barres pour les cas par semaine (statut empilé)
    new Chart(document.getElementById('barChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Validated',
            data: getStackedData(reportStore, 'validated'),
            backgroundColor: '#4caf50'
          },
          {
            label: 'Pending',
            data: getStackedData(reportStore, 'pending'),
            backgroundColor: '#ff9800'
          },
          {
            label: 'Rejected',
            data: getStackedData(reportStore, 'rejected'),
            backgroundColor: '#f44336'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true },
          y: { stacked: true, beginAtZero: true }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutBounce'
        }
      }
    });
  
    // Graphique à bulles pour la distribution géographique
    new Chart(document.getElementById('geoDistributionChart').getContext('2d'), {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Geographical Distribution of Cases',
          data: getGeographicalData(reportStore),
          backgroundColor: '#ff6384',
          borderColor: '#ff6384',
          borderWidth: 1,
          radius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Longitude' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Latitude' }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuad'
        }
      }
    });
  }
  
  // Fonction pour récupérer les données hebdomadaires
  function getWeeklyReports(store) {
    const reportsByWeek = [0, 0, 0, 0];
    store.reports.forEach(report => {
      const weekNumber = Math.ceil(new Date(report.date).getDate() / 7);
      reportsByWeek[weekNumber - 1]++;
    });
    return reportsByWeek;
  }
  
  // Fonction pour les tendances des symptômes
  function getSymptomData(store) {
    const symptomMap = { Fever: 0, Cough: 0, Fatigue: 0, Headache: 0 };
    store.reports.forEach(report => {
      symptomMap[report.symptoms]++;  // Supposons que le symptôme est une valeur unique
    });
    return Object.values(symptomMap);
  }
  
  // Fonction pour récupérer les données empilées pour les barres
  function getStackedData(store, status) {
    const reportsByWeek = [0, 0, 0, 0];
    store.reports
      .filter(report => report.status === status)
      .forEach(report => {
        const weekNumber = Math.ceil(new Date(report.date).getDate() / 7);
        reportsByWeek[weekNumber - 1]++;
      });
    return reportsByWeek;
  }
  
  // Fonction pour récupérer les données de distribution géographique
  function getGeographicalData(store) {
    return store.reports.map(report => ({
      x: report.longitude,
      y: report.latitude,
      r: 10  // Taille fixe pour les bulles
    }));
  }
  </script>
  
  <style scoped>
  .super-admin-dashboard {
    display: flex;
    height: 100vh;
    width: 100%;
  }
  
  .sidebar {
    width: 250px; /* Réduire la largeur du sidebar */
    height: 300vh; /* S'étend sur toute la hauteur de la page */
    background-color: #2c3e50;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Aligner les éléments en haut */
  }
  
  .sidebar h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding: 15px 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .sidebar ul li:hover {
    background-color: #333;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .stat-box {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    text-align: center;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stat-box:hover {
    transform: translateY(-10px);
  }
  
  .stat-box .icon {
    font-size: 40px;
    color: #3498db;
    margin-bottom: 10px;
  }
  
  .charts {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .chart {
    width: 45%;
    height: 400px;
  }
  </style>
  