<template>
  <canvas id="pieChart" ref="pieChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { useReportStore } from '@/stores/reportStore';

Chart.register(...registerables);

export default {
  name: 'PieChart',
  setup() {
    const reportStore = useReportStore();
    
    return { reportStore };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.pieChart.getContext('2d');
      const symptomCounts = {};
      
      // Compter le nombre de rapports par type de symptômes
      this.reportStore.reports.forEach(report => {
        report.symptoms.split(',').forEach(symptom => {
          symptomCounts[symptom.trim()] = (symptomCounts[symptom.trim()] || 0) + 1;
        });
      });
      
      const labels = Object.keys(symptomCounts);
      const data = Object.values(symptomCounts);

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Répartition des Symptômes',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
          }],
        },
        options: {
          responsive: true,
        }
      });
    }
  }
}
</script>
