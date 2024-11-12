<template>
<div>
    <h1>
        <Map />
          
    </h1>
    </div>
    
</template>

<script>
import Map from '../components/Map.vue'

import 'leaflet/dist/leaflet.css';
import 'leaflet-search/dist/leaflet-search.src.css'; // Importer les styles du plugin
import 'leaflet-search'; // Importer le plugin
export default {
    components :{
        Map,
        
    }

};
</script>
