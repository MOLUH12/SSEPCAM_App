import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        user: {
            isAuthenticated: false,
            id: null,
            name: null,
            email: null,
            role: null,  // Gérer le rôle de l'utilisateur
            access: null,
            refresh: null,
            avatar: null
        },
        users: [], // Liste des utilisateurs pour les opérations CRUD
        notification: {
            message: '',
            type: ''
        },
        currentProfileId: null // Pour stocker l'ID du profil à modifier ou supprimer
    }),

    actions: {
        initStore() {
            console.log('initStore', localStorage.getItem('user.access'))
            if (localStorage.getItem('user.access')) {
                console.log('User has access!')
                
                this.user.access = localStorage.getItem('user.access')
                this.user.refresh = localStorage.getItem('user.refresh')
                this.user.id = localStorage.getItem('user.id')
                this.user.name = localStorage.getItem('user.name')
                this.user.email = localStorage.getItem('user.email')
                this.user.avatar = localStorage.getItem('user.avatar')
                this.user.role = localStorage.getItem('user.role')  // Charger le rôle depuis localStorage
                this.user.isAuthenticated = true

                this.refreshToken()
            }
        },

        setToken(data) {
            this.user.access = data.access
            this.user.refresh = data.refresh
            this.user.isAuthenticated = true

            localStorage.setItem('user.access', data.access)
            localStorage.setItem('user.refresh', data.refresh)
            console.log('user.access: ', localStorage.getItem('user.access'))
        },

        removeToken() {
            this.user.refresh = null
            this.user.access = null
            this.user.isAuthenticated = false
            this.user.id = null
            this.user.name = null
            this.user.email = null
            this.user.role = null  // Réinitialiser le rôle

            localStorage.setItem('user.access', '')
            localStorage.setItem('user.refresh', '')
            localStorage.setItem('user.id', '')
            localStorage.setItem('user.name', '')
            localStorage.setItem('user.email', '')
            localStorage.setItem('user.role', '')  // Réinitialiser le rôle dans localStorage
        },

        setUserInfo(user) {
            this.user.id = user.id
            this.user.name = user.name
            this.user.email = user.email
            this.user.avatar = user.avatar
            this.user.role = user.role  // Mettre à jour le rôle

            localStorage.setItem('user.id', this.user.id)
            localStorage.setItem('user.name', this.user.name)
            localStorage.setItem('user.email', this.user.email)
            localStorage.setItem('user.role', this.user.role)  // Stocker le rôle dans localStorage
        },

        refreshToken() {
            axios.post('/api/refresh/', {
                refresh: this.user.refresh
            })
                .then((response) => {
                    this.user.access = response.data.access
                    localStorage.setItem('user.access', response.data.access)
                    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access
                })
                .catch((error) => {
                    this.removeToken()
                })
        },
        
            
                // CRUD Operations for Users
                async fetchUsers() {
                    try {
                        const response = await axios.get('/api/api/users/', {  // Liste des utilisateurs
                            headers: {
                                Authorization: `Bearer ${this.user.access}`
                            }
                        });
                        this.users = response.data;
                    } catch (error) {
                        console.log(error);
                        this.notification = { message: 'Erreur lors du chargement des utilisateurs.', type: 'bg-red-300' };
                    }
                },
        
                async addUser(newUser) {
                    try {
                        const response = await axios.post('/api/api/users/', newUser, {  // Ajout d'un nouvel utilisateur
                            headers: {
                                Authorization: `Bearer ${this.user.access}`
                            }
                        });
                        this.users.push(response.data);
                        this.notification = { message: 'Utilisateur ajouté avec succès.', type: 'bg-green-300' };
                    } catch (error) {
                        console.log(error);
                        this.notification = { message: 'Erreur lors de l\'ajout de l\'utilisateur.', type: 'bg-red-300' };
                    }
                },
        
                async updateUser(update_profile) {
                    try {
                        const response = await axios.put(`/api/api/users/${update_profile.id}/`, update_profile, {  // Mise à jour d'un utilisateur spécifique
                            headers: {
                                Authorization: `Bearer ${this.user.access}`
                            }
                        });
                        const index = this.users.findIndex(user => user.id === update_profile.id);
                        if (index !== -1) {
                            this.users.splice(index, 1, response.data);  // Mettre à jour l'utilisateur dans la liste
                        }
                        this.notification = { message: 'Utilisateur mis à jour avec succès.', type: 'bg-green-300' };
                    } catch (error) {
                        console.log(error);
                        this.notification = { message: 'Erreur lors de la mise à jour de l\'utilisateur.', type: 'bg-red-300' };
                    }
                },
        
                async deleteUser(userId) {
                    try {
                        await axios.delete(`/api/api/users/${userId}/`, {  // Suppression d'un utilisateur spécifique
                            headers: {
                                Authorization: `Bearer ${this.user.access}`
                            }
                        });
                        this.users = this.users.filter(user => user.id !== userId);  // Retirer l'utilisateur de la liste
                        this.notification = { message: 'Utilisateur supprimé avec succès.', type: 'bg-green-300' };
                    } catch (error) {
                        console.log(error);
                        this.notification = { message: 'Erreur lors de la suppression de l\'utilisateur.', type: 'bg-red-300' };
                    }
                },
        
                async updateProfile(profileData) {
                    try {
                        const response = await axios.put('/api/update-profile/', profileData, {  // Mise à jour du profil utilisateur
                            headers: {
                                Authorization: `Bearer ${this.user.access}`
                            }
                        });
                        this.user = response.data;
                        this.notification = { message: 'Profil mis à jour avec succès.', type: 'bg-green-300' };
                    } catch (error) {
                        console.log(error);
                        this.notification = { message: 'Erreur lors de la mise à jour du profil.', type: 'bg-red-300' };
                    }
                },
            }
    
        
});
