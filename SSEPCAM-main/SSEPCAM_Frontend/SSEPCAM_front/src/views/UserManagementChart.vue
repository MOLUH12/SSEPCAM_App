<template>
    <div>
      <canvas id="userManagementChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js/auto';
  
  export default {
    name: "UserManagementChart",
    mounted() {
      const ctx = document.getElementById('userManagementChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['User A', 'User B', 'User C'],  // Remplacez par des données réelles
          datasets: [{
            label: 'User Management Data',
            data: [12, 19, 3],  // Remplacez par des données réelles
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles spécifiques au composant ici */
  </style>
  