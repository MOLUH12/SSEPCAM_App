<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Cercles animés en arrière-plan -->
    <div class="circle bg-green-400"></div>
    <div class="circle bg-red-500"></div>
    <div class="circle bg-yellow-400"></div>

    <div class="text-center z-10">
      <!-- Titre animé -->
      <h1 class="text-5xl font-bold text-green-600 mb-8 animate-fade-in">
        Système de Surveillance Épidémiologique CAMEROUNAIS
      </h1>
      <p class="text-xl text-gray-700 mb-6 animate-slide-up">
        Signalons les cas suspects autours de nous pour une prise en charge totale et une meilleurs gestion
      </p>

      <!-- Bouton clignotant pour signaler un cas suspect -->
      <button
        @click="reportCase"
        class="bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg transform transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 animate-blink"
      >
        Signaler un Cas Suspect
      </button>

      <!-- Texte d'information sous le bouton avec SVG illustratifs -->
      <div class="mt-8 flex flex-col items-center">
        <p class="text-gray-600 text-center mb-4">
          Le système SSEPCAM vous permet de signaler rapidement les cas suspects d'épidémies à l'étendue du territoire Camerounais
        </p>

        <!-- SVG Illustrations Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <!-- SVG Surveillance -->
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m-9 9h18M3 13a4 4 0 100 8 4 4 0 100-8z" />
            </svg>
            <p class="mt-2 text-sm text-green-700 font-bold">Surveillance Épidémiologique</p>
          </div>

          <!-- SVG Contagion Propagation -->
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l-4 4m0 0l-4-4m4 4V4m0 16v-4m4-4h-8m12 8v-4m0 0H4m16-4v-4" />
            </svg>
            <p class="mt-2 text-sm text-red-700 font-bold">Propagation des Maladies</p>
          </div>

          <!-- SVG Cartographie des Cas -->
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4h-.5a2.5 2.5 0 000 5H5m5 4v-4m0 0l4 4m-4-4l-4 4m5-10l4-4m4 4v4m0 0l-4-4" />
            </svg>
            <p class="mt-2 text-sm text-yellow-700 font-bold">Cartographie des Cas</p>
          </div>

          <!-- SVG Vaccination et Prévention -->
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 0v4m0-4h-4m4 0h4m-4 8v-4m0 0V8m0-4V0m0 8h4" />
            </svg>
            <p class="mt-2 text-sm text-blue-700 font-bold">Prévention</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reportCase() {
      this.$router.push('/report'); // Redirige vers la vue nommée 'report'
    }
  }
};
</script>

<style scoped>
/* Keyframes pour les cercles animés */
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

/* Cercles en arrière-plan */
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: move 8s ease-in-out infinite alternate;
}

.circle:nth-child(1) {
  width: 150px;
  height: 150px;
  top: 20%;
  left: 10%;
  animation-duration: 6s;
}

.circle:nth-child(2) {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 70%;
  animation-duration: 10s;
}

.circle:nth-child(3) {
  width: 250px;
  height: 250px;
  top: 80%;
  left: 30%;
  animation-duration: 12s;
}

/* Animation de fade-in pour le titre */
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

/* Animation slide-up pour le paragraphe */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 2s ease-in-out;
}

/* Animation clignotante pour le bouton */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-blink {
  animation: blink 1.5s infinite;
}
</style>
