<template>
    <div id="map" class="h-80"></div>
  </template>
  
  <script>
  import { onMounted } from "vue";
  import L from "leaflet";
  
  export default {
    setup() {
      onMounted(() => {
        const map = L.map("map").setView([7.3697, 12.3547], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: 'Map data © OpenStreetMap contributors',
        }).addTo(map);
      });
    },
  };
  </script>
  
  <style>
  #map {
    height: 100%;
  }
  </style>
  