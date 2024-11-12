<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-semibold mb-6 text-gray-700">Gestion des Profils</h1>

    <!-- Notification message -->
    <transition name="fade">
      <div v-if="toastStore.isVisible" :class="['p-4 mb-4 rounded-lg', toastStore.classes]">
        {{ toastStore.message }}
      </div>
    </transition>

    <!-- Bouton pour rediriger vers le formulaire d'ajout d'utilisateur -->
    <div class="mb-8 flex justify-end">
      <button @click="redirectToSignup" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Ajouter un utilisateur
      </button>
    </div>

    <!-- Liste des utilisateurs -->
    <div class="bg-white shadow rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">Liste des Utilisateurs</h2>
      <table class="w-full table-auto">
        <thead class="bg-gray-200">
          <tr>
            <th class="px-4 py-2 text-left">ID</th>
            <th class="px-4 py-2 text-left">Nom</th>
            <th class="px-4 py-2 text-left">Rôle</th>
            <th class="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="text-center">
            <td class="border px-4 py-2">{{ user.id }}</td>
            <td class="border px-4 py-2">{{ user.name }}</td>
            <td class="border px-4 py-2">{{ user.role }}</td>
            <td class="border px-4 py-2 flex justify-center space-x-2">
              <button @click="editProfile(user)" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
                Modifier
              </button>
              <button @click="confirmDeleteProfile(user.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Fenêtre de confirmation pour la suppression -->
    <transition name="fade">
      <div v-if="isConfirmDelete" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-semibold mb-4">Confirmer la suppression</h3>
          <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
          <div class="flex justify-end space-x-4 mt-4">
            <button @click="deleteProfile(currentProfileId)" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">
              Supprimer
            </button>
            <button @click="isConfirmDelete = false" class="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-300">
              Annuler
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useToastStore } from '@/stores/toast';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const toastStore = useToastStore();
const router = useRouter();

const currentProfileId = ref(null);
const isConfirmDelete = ref(false);

const users = computed(() => userStore.users);

const editProfile = (user) => {
  // Logique pour l'édition de profil
};

const confirmDeleteProfile = (id) => {
  currentProfileId.value = id;
  isConfirmDelete.value = true;
};

const deleteProfile = async (id) => {
  try {
    await userStore.deleteUser(id);
    toastStore.showToast(3000, 'Profil supprimé avec succès.', 'bg-green-300');
    isConfirmDelete.value = false;
  } catch (error) {
    toastStore.showToast(3000, "Erreur lors de la suppression.", 'bg-red-300');
  }
};

// Fonction pour rediriger vers le formulaire d'inscription (Signup.vue)
const redirectToSignup = () => {
  router.push({ name: 'Signup' }); // Assurez-vous que 'Signup' est bien une route définie dans votre fichier de routes.
};

// Fetch users on component mount
userStore.fetchUsers();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
   