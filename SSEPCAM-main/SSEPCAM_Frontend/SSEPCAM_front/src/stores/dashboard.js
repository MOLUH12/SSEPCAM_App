import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    lineChartData: [65, 59, 80, 81, 56, 55, 40],
    barChartData: [28, 48, 40, 19, 86, 27, 90],
    pieChartData: [10, 20, 30],
    scatterChartData: [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 }
    ],
    areaChartData: [33, 53, 85, 41, 44, 65],
  }),
})
