<template>
  <div class="relative max-w-7xl mx-auto flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
    
    <!-- Cercles animés -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="circle-animation bg-green-400 opacity-50"></div>
      <div class="circle-animation bg-green-300 opacity-50 delay-1"></div>
      <div class="circle-animation bg-green-200 opacity-50 delay-2"></div>
    </div>

    <div class="main-right flex flex-col items-center justify-center relative z-10">
      
      <!-- Image en haut -->
      <img src="../assets/SSEPCAM.PNG" alt="logo de SSEPCAM" class="rounded-full w-20 h-20 mb-6">

      <!-- Formulaire -->
      <div class="p-12 bg-white border border-gray-200 shadow-lg rounded-lg w-full max-w-md">
        <form class="space-y-6" v-on:submit.prevent="submitForm">
          
          <!-- E-mail -->
          <div>
            <label class="text-gray-700 font-medium">E-mail</label><br>
            <input
              type="email"
              v-model="form.email"
              placeholder="Votre adresse e-mail"
              class="w-full mt-2 py-4 px-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            />
          </div>

          <!-- Mot de passe -->
          <div>
            <label class="text-gray-700 font-medium">Mot de passe</label><br>
            <input
              type="password"
              v-model="form.password"
              placeholder="Votre mot de passe"
              class="w-full mt-2 py-4 px-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              autocomplete="new-password"
            />
          </div>

          <!-- Messages d'erreurs -->
          <template v-if="errors.length > 0">
            <div class="bg-red-100 text-red-600 rounded-lg p-4">
              <p v-for="error in errors" :key="error" class="mb-1">- {{ error }}</p>
            </div>
          </template>

          <!-- Bouton de connexion -->
          <div>
            <button class="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: []
    };
  },
  
  methods: {
    async submitForm() {
      this.errors = [];

      // Vérification des champs
      if (this.form.email === '') {
        this.errors.push('Votre e-mail est manquant.');
      }

      if (this.form.password === '') {
        this.errors.push('Votre mot de passe est manquant.');
      }

      // Si pas d'erreurs, tenter la connexion
      if (this.errors.length === 0) {
        try {
          const response = await axios.post('/api/login/', this.form);
          const token = response.data.access; // Assurez-vous que "access" est le token
          this.userStore.setToken(token);
          localStorage.setItem('jwt_token', token); // Stockage du token
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;

          const userResponse = await axios.get('/api/me/');
          this.userStore.setUserInfo(userResponse.data);
          
          // Redirection en fonction du rôle
          const userRole = userResponse.data.role;
          if (userRole === 'Super Administrateur') {
            this.$router.push('/saDashboard');
          } else if (userRole === 'Administrateur') {
            this.$router.push('/adDashboard');
          } else if (userRole === 'Formation Sanitaire') {
            this.$router.push('/fsDashboard');
          } else {
            this.$router.push('/'); // Si aucun rôle valide
          }
        } catch (error) {
          console.log('Erreur de connexion :', error);
          this.errors.push("L'e-mail ou le mot de passe est incorrect, ou l'utilisateur n'est pas activé !");
        }
      }
    }
  }
};
</script>

<style scoped>
html, body {
  font-family: 'Poppins', sans-serif;
}

/* Centrer le formulaire dans la page */
.main-right {
  width: 100%;
  max-width: 100%;
}

/* Cercles animés */
.circle-animation {
  position: absolute;
  border-radius: 50%;
  width: 600px;
  height: 500px;
  animation: moveCircle 10s infinite ease-in-out;
}

.circle-animation.delay-1 {
  animation-delay: 2s;
}

.circle-animation.delay-2 {
  animation-delay: 4s;
}

@keyframes moveCircle {
  0% {
    transform: scale(0.8) translateY(0);
  }
  50% {
    transform: scale(1.2) translateY(50px);
  }
  100% {
    transform: scale(0.8) translateY(0);
  }
}

/* Ajustement des couleurs */
button {
  background-color: #38a169; /* Vert */
}

button:hover {
  background-color: #2f855a; /* Vert plus foncé au survol */
}

input:focus {
  border-color: #48bb78; /* Bordure verte au focus */
}

label {
  color: #2d3748; /* Gris foncé */
}
</style>
