<template>
    <canvas id="scatterPlot"></canvas>
  </template>
  
  <script>
 import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { onMounted, ref } from "vue";
  
  // Enregistrement manuel des composants requis
  ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  
  export default {
    props: ['data'],
    setup(props) {
      onMounted(() => {
        const ctx = document.getElementById('scatterPlot').getContext('2d');
        new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [
              {
                label: 'Cas Rapportés',
                data: props.data || [
                  { x: 65, y: 75 },
                  { x: 59, y: 80 },
                  { x: 80, y: 81 },
                  { x: 81, y: 56 },
                  { x: 56, y: 55 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
    },
  };
  </script>
  