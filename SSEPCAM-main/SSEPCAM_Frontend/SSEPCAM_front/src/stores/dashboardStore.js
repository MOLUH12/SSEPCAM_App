import { defineStore } from 'pinia';
import axios from 'axios';

export const useDashboardStore = defineStore('dashboardStore', {
  state: () => ({
    stats: {
      pending: 0,
      validated: 0,
      invalidated: 0,
    },
    loading: false,
    error: null,
  }),
  actions: {
    async fetchStats(token) {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:8000/api/reports/<int:pk>/status/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.stats = response.data;
      } catch (error) {
        this.error = 'Erreur lors du chargement des statistiques.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
