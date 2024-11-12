<template>
  <div>
    <h1>Détails du rapport</h1>
    <p>{{ report.name }} - {{ report.status }}</p>
    
    <!-- Boutons de validation/invalidation accessibles uniquement pour les rôles spécifiques -->
    <button @click="validateReport(report.id)">Valider le cas</button>
    <button @click="invalidateReport(report.id)">Invalider le cas</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      report: {}
    };
  },
  created() {
    this.fetchReport();
  },
  methods: {
    fetchReport() {
      // Récupérer le rapport à partir de l'API
      axios.get(`/api/reports/${this.$route.params.id}/`)
        .then(response => {
          this.report = response.data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement du rapport:", error);
        });
    },
    validateReport(id) {
      // Appel pour valider le rapport
      axios.post(`/api/reports/${id}/validate_case/`)
        .then(() => {
          alert('Le cas a été validé');
          this.fetchReport();  // Rafraîchir les données
        })
        .catch(error => {
          console.error("Erreur lors de la validation du cas:", error);
        });
    },
    invalidateReport(id) {
      // Appel pour invalider le rapport
      axios.post(`/api/reports/${id}/invalidate_case/`)
        .then(() => {
          alert('Le cas a été invalidé');
          this.fetchReport();  // Rafraîchir les données
        })
        .catch(error => {
          console.error("Erreur lors de l'invalidation du cas:", error);
        });
    }
  }
};
</script>
