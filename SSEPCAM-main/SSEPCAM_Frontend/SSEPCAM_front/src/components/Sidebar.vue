<template>
  <div class="sidebar">
    <h2>Navigation</h2>
    <ul>
      <li><router-link to="/fsDashboard">Tableau de Bord Formation Sanitaire</router-link></li>
      <li><router-link to="/adDashboard">Tableau de Bord Administrateur</router-link></li>
      <li><router-link to="/saDashboard">Tableau de Bord Super Administrateur</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 1rem;
}
.sidebar h2 {
  margin-bottom: 1rem;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar li {
  margin: 0.5rem 0;
}
</style>
