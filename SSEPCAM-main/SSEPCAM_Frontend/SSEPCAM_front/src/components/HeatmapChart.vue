<template>
    <l-map style="height: 400px" :zoom="7" :center="[7.3697, 12.3547]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
    </l-map>
  </template>
  
  <script>
  import { LMap, LTileLayer } from 'vue-leaflet';
  
  export default {
    components: {
      LMap,
      LTileLayer,
    },
  };
  </script>
  
  <style scoped>
  /* Style spécifique pour la carte */
  </style>
  