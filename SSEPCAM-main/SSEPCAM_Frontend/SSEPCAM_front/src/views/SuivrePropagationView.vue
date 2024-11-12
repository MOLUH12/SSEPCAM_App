<template>
    <div>
        <h1>
            <MapPropah />
              
        </h1>
        </div>
        
    </template>
    
    <script>

    import MapPropah from '../components/MapPropah.vue'
    import 'leaflet/dist/leaflet.css';
    import 'leaflet-search/dist/leaflet-search.src.css'; // Importer les styles du plugin
    import 'leaflet-search'; // Importer le plugin
    export default {
        components :{
            MapPropah,
            
        }
    
    };
    </script>
    