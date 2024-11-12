<template>
  <div>
    <Line :data="chartData" options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const chartOptions = {
  fill: true,
  animations: {
    tension: {
      duration: 1000,
      easing: 'easeInOutBounce',
      from: 1,
      to: 0,
      loop: true
    }
  }
}
</script>
