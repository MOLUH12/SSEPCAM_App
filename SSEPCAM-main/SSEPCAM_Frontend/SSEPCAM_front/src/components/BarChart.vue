<template>
  <canvas id="barChart" ref="barChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { useReportStore } from '@/stores/reportStore';

Chart.register(...registerables);

export default {
  name: 'BarChart',
  setup() {
    const reportStore = useReportStore();
    
    return { reportStore };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.barChart.getContext('2d');
      const data = this.reportStore.reports.map(report => report.symptoms.length); // Exemple d'utilisation des symptômes comme données
      const labels = this.reportStore.reports.map(report => report.name); // Adaptation nécessaire

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Nombre de Symptômes par Rapport',
            data: data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
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
