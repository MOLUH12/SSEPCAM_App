import { defineStore } from 'pinia';
import axios from 'axios';

export const useProfilStore = defineStore('profilStore', {
    state: () => ({
        profils: [],
        profil: null,
    }),
    actions: {
        async fetchProfils() {
            try {
                const response = await axios.get('/api/profils/');
                this.profils = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchProfil(id) {
            try {
                const response = await axios.get(`/api/profils/${id}/`);
                this.profil = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async updateProfil(id, profilData) {
            try {
                const response = await axios.put(`/api/profils/${id}/`, profilData);
                this.profil = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
