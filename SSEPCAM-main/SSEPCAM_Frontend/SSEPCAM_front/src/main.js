import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Toast from '@/components/Toast.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'
import 'tailwindcss/tailwind.css'


import 'leaflet/dist/leaflet.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
const app = createApp(App)

app.component('Toast', Toast)
app.use(createPinia())
app.use(router, axios)

app.mount('#app')
