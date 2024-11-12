<template>
    <canvas id="bubbleChart"></canvas>
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
        const ctx = document.getElementById('bubbleChart').getContext('2d');
        new Chart(ctx, {
          type: 'bubble',
          data: {
            datasets: [
              {
                label: 'Cas',
                data: props.data || [
                  { x: 65, y: 75, r: 15 },
                  { x: 59, y: 80, r: 10 },
                  { x: 80, y: 81, r: 20 },
                  { x: 81, y: 56, r: 5 },
                  { x: 56, y: 55, r: 25 },
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
  