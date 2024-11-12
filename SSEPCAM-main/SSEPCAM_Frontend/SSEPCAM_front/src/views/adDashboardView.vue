<template>
    <div class="admin-dashboard">
      <div class="sidebar">
        <h2>SSEPCAM</h2>
        <ul>
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
                    </div>
                </div>
        </ul>
      </div>
      <div class="content">
        <div class="header">
          <h1>Administrator Dashboard</h1>
        </div>
  
        <!-- Statistiques avec animations d'apparition -->
        <div class="stats">
          <div class="stat-box" v-for="stat in stats" :key="stat.label">
            <h3>{{ stat.label }}</h3>
            <p>{{ stat.value }} cases</p>
          </div>
        </div>
  
        <!-- Zone des graphiques avec plus de types de visualisation -->
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
  
      const stats = reactive([
        { label: 'Validated Cases', value: reportStore.reports.filter((r) => r.status === 'validated').length },
        { label: 'Pending Cases', value: reportStore.reports.filter((r) => r.status === 'pending').length },
        { label: 'Rejected Cases', value: reportStore.reports.filter((r) => r.status === 'rejected').length }
      ]);
  
      const charts = reactive([
        { id: 'lineChart', type: 'line', data: [] },
        { id: 'pieChart', type: 'pie', data: [] },
        { id: 'radarChart', type: 'radar', data: [] }, // Nouveau diagramme radar
        { id: 'stackedBarChart', type: 'bar', data: [] } // Nouveau diagramme à barres empilées
      ]);
  
      onMounted(() => {
        generateCharts(reportStore, charts);
      });
  
      return {
        stats,
        charts
      };
    }
  };
  
  // Fonction pour générer tous les graphiques avec les animations et styles modernes
  function generateCharts(reportStore, charts) {
    // Graphique en ligne
    new Chart(document.getElementById('lineChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'New Cases per Week',
          data: getWeeklyReports(reportStore),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
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
  
    // Graphique en anneau (pie)
    new Chart(document.getElementById('pieChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Validated', 'Pending', 'Rejected'],
        datasets: [{
          label: 'Case Status',
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
  
    // Nouveau Graphique Radar
    new Chart(document.getElementById('radarChart').getContext('2d'), {
      type: 'radar',
      data: {
        labels: ['Fever', 'Cough', 'Fatigue', 'Headache'],
        datasets: [{
          label: 'Symptom Frequency',
          data: getSymptomData(reportStore),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: { beginAtZero: true }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutElastic'
        }
      }
    });
  
    // Nouveau Graphique à barres empilées
    new Chart(document.getElementById('stackedBarChart').getContext('2d'), {
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
  }
  
  // Fonction pour récupérer les rapports hebdomadaires
  function getWeeklyReports(store) {
    const reportsByWeek = [0, 0, 0, 0];
    store.reports.forEach(report => {
      const weekNumber = Math.ceil(new Date(report.date).getDate() / 7);
      reportsByWeek[weekNumber - 1]++;
    });
    return reportsByWeek;
  }
  
  // Fonction pour récupérer les données de symptômes
  function getSymptomData(store) {
    const symptoms = { Fever: 0, Cough: 0, Fatigue: 0, Headache: 0 };
    store.reports.forEach(report => {
      if (report.symptoms.includes('Fever')) symptoms['Fever']++;
      if (report.symptoms.includes('Cough')) symptoms['Cough']++;
      if (report.symptoms.includes('Fatigue')) symptoms['Fatigue']++;
      if (report.symptoms.includes('Headache')) symptoms['Headache']++;
    });
    return Object.values(symptoms);
  }
  
  // Fonction pour obtenir les données empilées pour chaque statut
  function getStackedData(store, status) {
    const data = [0, 0, 0, 0];
    store.reports.forEach(report => {
      const weekNumber = Math.ceil(new Date(report.date).getDate() / 7);
      if (report.status === status) data[weekNumber - 1]++;
    });
    return data;
  }
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
    min-height: 100vh;
    background-color: #f0f2f5;
  }
  .sidebar {
    width: 220px;
    background-color: #1f1f1f;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
  }
  .sidebar:hover {
    width: 260px;
  }
  .sidebar h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
    width: 100%;
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
    width: 150px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  .stat-box:hover {
    transform: translateY(-10px);
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
  