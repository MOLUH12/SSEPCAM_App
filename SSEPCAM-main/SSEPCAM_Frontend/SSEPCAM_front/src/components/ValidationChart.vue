<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Case Validation Progress</h2>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  import { Chart } from "chart.js/auto";
  
  export default {
    setup() {
      const chartCanvas = ref(null);
      let chartInstance = null;
  
      onMounted(() => {
        const ctx = chartCanvas.value.getContext("2d");
        chartInstance = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Validated", "Pending", "Rejected"],
            datasets: [
              {
                data: [60, 25, 15],
                backgroundColor: [
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
              },
            ],
          },
        });
      });
  
      return { chartCanvas };
    },
  };
  </script>
  