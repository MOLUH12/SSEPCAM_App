<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 relative overflow-hidden">
    <!-- Animated Background Circles -->
    <div class="circle bg-green-400"></div>
    <div class="circle bg-red-500"></div>
    <div class="circle bg-yellow-400"></div>
    <!-- Notifications (toast) -->
    <div v-if="toast.isVisible" class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-opacity-90 p-4 rounded-md shadow-lg text-white transition-all duration-500 z-50" :class="toast.background">
      {{ toast.message }}
    </div>
    <div class="main-right flex flex-col items-center justify-center relative z-10">
      <!-- Image en haut -->
      <img src="../assets/SSEPCAM.PNG" alt="logo de SSEPCAM" class="rounded-full w-20 h-20 mb-6">
    </div>
    <!-- Formulaire principal -->
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg relative z-10">
      <h2 class="text-2xl font-bold text-green-600 mb-6 text-center animate-fade-in">Signaler un Cas Suspect</h2>

      <form @submit.prevent="submitReport">
        <!-- Nom complet -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Entrez votre nom"
            required
          />
        </div>

        <!-- Latitude (lecture seule) -->
        <div class="mb-4">
          <label for="latitude" class="block text-sm font-medium text-gray-700">Latitude</label>
          <input
            v-model="formData.latitude"
            type="number"
            id="latitude"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Récupération automatique..."
            readonly
          />
        </div>

        <!-- Longitude (lecture seule) -->
        <div class="mb-4">
          <label for="longitude" class="block text-sm font-medium text-gray-700">Longitude</label>
          <input
            v-model="formData.longitude"
            type="number"
            id="longitude"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Récupération automatique..."
            readonly
          />
        </div>

        <!-- Symptômes -->
        <div class="mb-4">
          <label for="symptoms" class="block text-sm font-medium text-gray-700">Symptômes observés</label>
          <textarea
            v-model="formData.symptoms"
            id="symptoms"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
            placeholder="Décrivez les symptômes observés"
            required
          ></textarea>
        </div>

        <!-- Date de l'observation -->
        <div class="mb-4">
          <label for="date" class="block text-sm font-medium text-gray-700">Date de l'observation</label>
          <input
            v-model="formData.date"
            type="date"
            id="date"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <!-- Numéro de contact -->
        <div class="mb-4">
          <label for="contact" class="block text-sm font-medium text-gray-700">Numéro de contact</label>
          <input
            v-model="formData.contact"
            type="tel"
            id="contact"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Entrez votre numéro de contact"
          />
        </div>

        <!-- Bouton de soumission -->
        <div class="mt-6">
          <button
            type="submit"
            :disabled="!locationAcquired"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            {{ locationAcquired ? 'Soumettre le Cas Suspect' : 'Obtention de la localisation...' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useReportStore } from '@/stores/reportStore';
import { useToastStore } from '@/stores/toast';

const reportStore = useReportStore();
const toast = useToastStore();

const formData = reactive(reportStore.formData);
const locationAcquired = ref(false);

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        formData.latitude = position.coords.latitude;
        formData.longitude = position.coords.longitude;
        locationAcquired.value = true;
      },
      (error) => {
        toast.showToast(3000, 'Erreur lors de la récupération de la localisation.', 'bg-red-500');
      }
    );
  } else {
    toast.showToast(3000, 'La géolocalisation n\'est pas prise en charge par ce navigateur.', 'bg-red-500');
  }
};

onMounted(() => {
  getLocation();
});

const submitReport = async () => {
  if (!locationAcquired.value) {
    toast.showToast(3000, 'Localisation non obtenue. Veuillez attendre.', 'bg-yellow-500');
    return;
  }

  try {
    await reportStore.submitReport();
    toast.showToast(3000, 'Votre cas suspect a été soumis avec succès !', 'bg-green-500');

    formData.name = '';
    formData.latitude = null;
    formData.longitude = null;
    formData.symptoms = '';
    formData.date = '';
    formData.contact = '';

    locationAcquired.value = false;
    getLocation();
  } catch (error) {
    toast.showToast(3000, 'Une erreur est survenue lors de la soumission. Veuillez réessayer.', 'bg-red-500');
  }
};
</script>

<style scoped>
/* Keyframes for circle animations */
@keyframes move {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-100px) translateX(100px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(200px) translateX(-200px);
    opacity: 0.7;
  }
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: move 8s ease-in-out infinite alternate;
}

.circle:nth-child(1) {
  width: 150px;
  height: 150px;
  top: 10%;
  left: 15%;
  animation-duration: 6s;
}

.circle:nth-child(2) {
  width: 200px;
  height: 200px;
  top: 40%;
  left: 75%;
  animation-duration: 10s;
}

.circle:nth-child(3) {
  width: 250px;
  height: 250px;
  top: 85%;
  left: 30%;
  animation-duration: 12s;
}

/* Fade-in animation for the title */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 2s ease-in-out;
}
</style>
