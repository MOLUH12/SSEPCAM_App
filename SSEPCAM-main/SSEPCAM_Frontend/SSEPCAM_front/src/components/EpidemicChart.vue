<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Epidemic Spread</h2>
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
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "New Cases",
                data: [30, 50, 40, 60, 80, 100, 120],
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false,
              },
            ],
          },
        });
      });
  
      return { chartCanvas };
    },
  };
  </script>
  