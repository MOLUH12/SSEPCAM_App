<template>
  <canvas id="lineChart" ref="lineChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { useReportStore } from '@/stores/reportStore';

Chart.register(...registerables);

export default {
  name: 'LineChart',
  setup() {
    const reportStore = useReportStore();
    
    return { reportStore };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.lineChart.getContext('2d');
      const data = this.reportStore.reports.map(report => report.date); // Adaptation nécessaire en fonction des données
      const labels = this.reportStore.reports.map(report => report.name); // Adaptation nécessaire

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Rapports par Date',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
</script>
