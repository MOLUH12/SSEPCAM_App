<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-between">
    <!-- Sidebar -->
    <div class="flex h-screen">
      <div class="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-500 transform hover:translate-x-0 -translate-x-64 lg:translate-x-0">
        <div class="h-16 bg-green-500 flex items-center justify-center">
          <h3 class="text-2xl font-bold">SSEPCAM</h3>
        </div>
        <nav class="mt-10">
          <RouterLink
            :to="{ name: 'home' }"
            class="block py-2.5 px-4 rounded hover:bg-green-500 transition-colors duration-300">
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'validation' }"
            class="block py-2.5 px-4 rounded hover:bg-green-500 transition-colors duration-300">
            Cas Suspects
          </RouterLink>
          <RouterLink
            :to="{ name: 'ProfileEdit' }"
            class="block py-2.5 px-4 rounded hover:bg-green-500 transition-colors duration-300">
            Visualisation
          </RouterLink>
          <RouterLink
            :to="{ name: 'home' }"
            class="block py-2.5 px-4 rounded hover:bg-green-500 transition-colors duration-300">
            Logout
          </RouterLink>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="flex-1 ml-64 p-6">
        <!-- Top bar -->
        <div class="bg-white h-16 px-6 py-4 flex items-center shadow transition-all duration-500 hover:shadow-lg hover:bg-gray-50">
          <h1 class="text-3xl font-semibold text-gray-800 animate-pulse">
            Dashboard
          </h1>
          <div class="ml-auto flex items-center">
            <button
              class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
              @click="exportData">
              Export Data
            </button>
          </div>
        </div>

        <!-- Notification Card (only animated when report is submitted) -->
        <div v-if="showNotification" class="bg-yellow-500 p-4 rounded-lg shadow-lg mt-4 animate-bounce transition-all duration-500">
          <p class="text-white">New case report submitted!</p>
        </div>

        <!-- Main dashboard with real data -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="bg-white shadow rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-green-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9l-6 6-6-6"/>
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-xl font-semibold">Suspicious Cases</h2>
                <p class="text-gray-500 text-sm">{{ reportData.totalCases }} cases reported</p>
              </div>
            </div>
          </div>

          <div class="bg-white shadow rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-xl font-semibold">Validated Cases</h2>
                <p class="text-gray-500 text-sm">{{ reportData.validatedCases }} cases validated</p>
              </div>
            </div>
          </div>

          <!-- Other cards omitted for brevity -->

        </div>

        <!-- Chart Section with filters -->
        <div class="mt-6">
          <div class="flex justify-end space-x-4">
            <button @click="filterBy('week')" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Week</button>
            <button @click="filterBy('month')" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Month</button>
            <button @click="filterBy('year')" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Epidemiological Year</button>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <div class="bg-white shadow rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 class="text-xl font-semibold mb-4">Epidemic Spread</h2>
              <canvas id="epidemicChart"></canvas>
            </div>
            <div class="bg-white shadow rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 class="text-xl font-semibold mb-4">Case Validation Progress</h2>
              <canvas id="validationChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-4 mt-8 text-center shadow-lg">
      <p>&copy; 2024 SSEPCAM. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import { useReportStore } from '@/stores/reportStore';

export default {
  name: 'Dashboard',
  setup() {
    const reportStore = useReportStore();
    const reportData = ref({
      totalCases: 0,
      validatedCases: 0,
    });
    const showNotification = ref(false);

    const fetchData = async () => {
      await reportStore.fetchReports();
      reportData.value = {
        totalCases: reportStore.totalCases,
        validatedCases: reportStore.validatedCases,
      };
    };

    const filterBy = (period) => {
      reportStore.filterReports(period);
      fetchData();
    };

    onMounted(() => {
      fetchData();

      const epidemicCtx = document.getElementById('epidemicChart').getContext('2d');
      const validationCtx = document.getElementById('validationChart').getContext('2d');

      new Chart(epidemicCtx, {
        type: 'line',
        data: {
          labels: reportStore.epidemicLabels,
          datasets: [{
            label: 'New Cases',
            data: reportStore.epidemicData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          }],
        },
      });

      new Chart(validationCtx, {
        type: 'pie',
        data: {
          labels: ['Validated', 'Pending', 'Rejected'],
          datasets: [{
            data: reportStore.validationData,
            backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
          }],
        },
      });

      // Simulate a new report submission and animate notification card
      reportStore.$onAction(({ name }) => {
        if (name === 'submitReport') {
          showNotification.value = true;
          setTimeout(() => {
            showNotification.value = false;
          }, 3000);
        }
      });
    });

    return {
      reportData,
      showNotification,
      filterBy,
    };
  },
};
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>
