<template>
    <div>
      <Scatter :data="chartData" />
    </div>
  </template>
  
  <script setup>
  import { Scatter } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)
  
  const props = defineProps({
    chartData: {
      type: Object,
      required: true
    }
  })
  </script>
  