<template>
    <div class="min-h-screen bg-gray-100 flex">
      <!-- Sidebar -->
      <aside class="bg-green-700 text-white w-64 p-6">
        <h2 class="text-2xl font-bold mb-8">SSEPCAM</h2>
        <nav class="space-y-2">
            
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
                    </div>
                </div>
        
        </nav>
      </aside>
  
      <!-- Main Dashboard Content -->
      <main class="flex-1 p-6">
        <!-- Top Stats -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center">
              <div class="bg-green-200 p-3 rounded-full">
                <i class="fas fa-check text-green-600"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-bold">Suspicious Cases</h3>
                <p class="text-sm text-gray-600">{{ suspiciousCases }} cases reported</p>
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center">
              <div class="bg-blue-200 p-3 rounded-full">
                <i class="fas fa-plus text-blue-600"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-bold">Validated Cases</h3>
                <p class="text-sm text-gray-600">{{ validatedCases }} cases validated</p>
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center">
              <div class="bg-red-200 p-3 rounded-full">
                <i class="fas fa-exclamation text-red-600"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-bold">Active Epidemics</h3>
                <p class="text-sm text-gray-600">{{ activeEpidemics }} ongoing outbreaks</p>
              </div>
            </div>
          </div>
  
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center">
              <div class="bg-yellow-200 p-3 rounded-full">
                <i class="fas fa-bell text-yellow-600"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-xl font-bold">New Notifications</h3>
                <p class="text-sm text-gray-600">{{ notifications }} new alerts</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Graphs -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white p-6 rounded-lg shadow">
            <canvas id="epidemicSpread"></canvas>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow">
            <canvas id="caseValidationProgress"></canvas>
          </div>
        </div>
  
        <!-- Animated Button for Case Submission -->
        <div class="flex justify-end mt-6">
          <button @click="submitCase" class="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out transform hover:scale-105">
            Submit a Suspect Case
          </button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useReportStore } from '@/stores/reportStore';
  import Chart from 'chart.js/auto';
  
  export default {
    setup() {
      const reportStore = useReportStore();
      const suspiciousCases = ref(0);
      const validatedCases = ref(0);
      const activeEpidemics = ref(0);
      const notifications = ref(5); // Static example
  
      onMounted(async () => {
        await reportStore.fetchReports();
        suspiciousCases.value = reportStore.reports.length;
        validatedCases.value = reportStore.reports.filter(report => report.status === 'validated').length;
        activeEpidemics.value = 3; // Example value
  
        // Chart for epidemic spread
        new Chart(document.getElementById('epidemicSpread'), {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
              label: 'New Cases',
              data: [30, 50, 70, 90, 100, 110, 120],
              borderColor: '#4caf50',
              fill: false,
            }],
          },
        });
  
        // Chart for case validation progress
        new Chart(document.getElementById('caseValidationProgress'), {
          type: 'pie',
          data: {
            labels: ['Validated', 'Pending', 'Rejected'],
            datasets: [{
              data: [60, 30, 10],
              backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
            }],
          },
        });
      });
  
      const submitCase = async () => {
        // Animation on button
        // Simulate submission process
      };
  
      return {
        suspiciousCases,
        validatedCases,
        activeEpidemics,
        notifications,
        submitCase,
      };
    },
  };
  </script>
  
  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  
  button {
    transition: all 0.3s ease-in-out;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  </style>
  