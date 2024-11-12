<template>
    <!-- On masque le nav si on est sur la page Dashboard -->
    <nav class="py-4 px-8 border-b border-gray-200" v-if="!isDashboardPage">
    <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between">
            <div class="menu-left">
                <div class="flex items-center justify-between">
                    <RouterLink :to="{'name': 'home'}" class="underline">
                        <img src="./assets/SSEPCAM.PNG" alt="logo de SSEPCAM" class="rounded-full w-12 h-12">
                    </RouterLink>
                    <a href="#" class="text-xl font-bold">SSEPCAM</a>
                </div>
            </div>
            
            <!-- Div qui disparaît si l'utilisateur n'est pas authentifié -->
            <div class="menu-center flex space-x-12" v-if="userStore.user.isAuthenticated || isDashboardPage">
                
                    <a href="#" class="text-purple-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </a>

                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </a>

                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </a>

                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </a>
                    
                
            </div>
            <!-- fin -->

            <div class="menu-right">
                <div class="flex items-center justify-between space-x-4">
                    <template v-if="userStore.user.isAuthenticated || isDashboardPage">
                        <a href="#">
                            <img src="https://i.pravatar.cc/40?img=70" class="rounded-full">
                        </a>
                    </template>
                    <template v-else>
                        <RouterLink to="/login" class="mr-2 py-2 px-2 bg-green-600 text-white rounded-lg">Log in</RouterLink>
                    </template>
                    <RouterLink :to="{'name': 'login'}" class="underline">
                        <img src="./assets/Minsante.jpeg" alt="logo du Minsante" class="rounded-full w-8 h-8">
                    </RouterLink>
                </div>
            </div>
        </div>      
    </div>
</nav>


    <main class="px-2 py-2 bg-gray-100">
        <RouterView />
    </main>
    
    <Toast />   
</template>

<script>
    import axios from 'axios'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import Toast from '@/components/Toast.vue'
    import { useUserStore } from '@/stores/user'
    
    export default {
        setup() {
            const userStore = useUserStore()
            const route = useRoute()

            // Vérifie si la route est Dashboard pour masquer ou afficher le contenu
            const isDashboardPage = computed(() => route.path === '/dashboard')

            return {
                userStore,
                isDashboardPage
            }
        },

        components: {
            Toast
        },

        beforeCreate() {
            this.userStore.initStore()

            const token = this.userStore.user.access

            if (token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            } else {
                axios.defaults.headers.common["Authorization"] = "";
            }
        }
    }
</script>