<template>
    <div>
        <h1>Gestion des Profils</h1>
        <ul>
            <li v-for="profil in profils" :key="profil.user.id">
                {{ profil.user.username }} - {{ profil.role }}
                <button @click="editProfil(profil)">Modifier</button>
            </li>
        </ul>
        <ProfilEdit v-if="selectedProfil" :profil="selectedProfil" @save="saveProfil" />
    </div>
</template>

<script>
import { useProfilStore } from '../stores/profilStore';

export default {
    data() {
        return {
            selectedProfil: null,
        };
    },
    async mounted() {
        const profilStore = useProfilStore();
        await profilStore.fetchProfils();
    },
    computed: {
        profils() {
            const profilStore = useProfilStore();
            return profilStore.profils;
        },
    },
    methods: {
        editProfil(profil) {
            this.selectedProfil = profil;
        },
        async saveProfil(profilData) {
            const profilStore = useProfilStore();
            await profilStore.updateProfil(this.selectedProfil.user.id, profilData);
            this.selectedProfil = null; // reset after save
        },
    },
};
</script>
