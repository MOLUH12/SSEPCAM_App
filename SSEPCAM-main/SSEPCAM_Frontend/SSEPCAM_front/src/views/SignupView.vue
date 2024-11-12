<template>
    <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
      <div class="main-left">
        <div class="p-12 bg-white border border-gray-200 rounded-lg">
          <h1 class="mb-6 text-2xl font-bold">Enregistrement</h1>
  
          <p class="mb-6 text-gray-500">
            Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
            Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
          </p>
  
          <p class="font-bold">
            Already have an account? 
            <RouterLink :to="{'name': 'login'}" class="underline">Click here</RouterLink> to log in!
          </p>
        </div>
      </div>
  
      <div class="main-right">
        <div class="p-12 bg-white border border-gray-200 rounded-lg">
          <form class="space-y-6" v-on:submit.prevent="submitForm">
  
            <div>
              <label>Name</label><br>
              <input type="text" v-model="form.name" placeholder="Your full name" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
            </div>
  
            <div>
              <label>E-mail</label><br>
              <input type="email" v-model="form.email" placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" autocomplete="e-mail">
            </div>
  
            <div>
              <label>Password</label><br>
              <input type="password" v-model="form.password1" placeholder="Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" autocomplete="new1-password">
            </div>
  
            <div>
              <label>Repeat Password</label><br>
              <input type="password" v-model="form.password2" placeholder="Repeat your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" autocomplete="new2-password">
            </div>
  
            <!-- Ajout du choix de rôle -->
            <div>
              <label>Select your role</label><br>
              <select v-model="form.role" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                <option disabled value="">Select a role</option>
                <option value="Super Administrateur">Super Administrateur</option>
                <option value="Administrateur">Administrateur</option>
                <option value="Formation Sanitaire">Formation Sanitaire</option>
              </select>
            </div>
  
            <template v-if="errors.length > 0">
              <div class="bg-red-300 text-white rounded-lg p-6">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
              </div>
            </template>
  
            <div>
              <button class="py-4 px-6 bg-purple-600 text-white rounded-lg">Sign up</button>
            </div>
          </form>
        </div>
      </div>  
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { useToastStore } from '@/stores/toast'
  
  export default {
    setup() {
      const toastStore = useToastStore()
  
      return {
        toastStore
      }
    },
  
    data() {
      return {
        form: {
          email: '',
          name: '',
          password1: '',
          password2: '',
          role: '', // Ajout du rôle
        },
        errors: [],
      }
    },
  
    methods: {
      submitForm() {
        this.errors = []
  
        // Vérification des champs obligatoires
        if (this.form.email === '') {
          this.errors.push('Your e-mail is missing')
        }
  
        if (this.form.name === '') {
          this.errors.push('Your name is missing')
        }
  
        if (this.form.password1 === '') {
          this.errors.push('Your password is missing')
        }
  
        if (this.form.password1 !== this.form.password2) {
          this.errors.push('The passwords do not match')
        }
  
        if (this.form.role === '') {
          this.errors.push('Please select a role')
        }
  
        // Si aucune erreur, soumettre le formulaire
        if (this.errors.length === 0) {
          axios
            .post('/api/signup/', this.form)
            .then(response => {
              if (response.data.message === 'success') {
                this.toastStore.showToast(5000, 'The user is registered. Please activate your account by clicking your email link.', 'bg-emerald-500')
  
                // Réinitialisation du formulaire
                this.form.email = ''
                this.form.name = ''
                this.form.password1 = ''
                this.form.password2 = ''
                this.form.role = ''
              } else {
                this.toastStore.showToast(5000, 'Something went wrong. Please try again.', 'bg-red-300')
              }
            })
            .catch(error => {
              console.log('error', error)
              this.errors.push('An error occurred during registration. Please try again later.')
            })
        }
      }
    }
  }
  </script>
  