import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user' // Modification ici pour importer le store user
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import fsDashboardView from '../views/fsDashboardView.vue'
import adDashboardView from '../views/adDashboardView.vue'
import saDashboardView from '../views/saDashboardView.vue'
import ReportFormView from '../views/ReportFormView.vue'
import ValidationView from '../views/ValidationView.vue'
import VisauliserView from '../views/VisauliserView.vue'
import CartographierView from '../views/CartographierView.vue'

import SuivrePropagationView from '../views/SuivrePropagationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Report',
      name: 'Report',
      component: ReportFormView
    },
    {
      path: '/validation',
      name: 'validation',
      component: ValidationView
    },
    {
      path: '/Carto',
      name: 'Carto',
      component: CartographierView
    },
    {
      path: '/Visauliser',
      name: 'Visauliser',
      component: VisauliserView
    },
    {
      path: '/propagation',
      name: 'propagation',
      component: SuivrePropagationView
    },
    // Formation Sanitaire Dashboard
    {
      path: '/fsDashboard',
      name: 'fsDashboard',
      component: fsDashboardView,
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore(); // Modification ici
        const userRole = userStore.user.role; // Modification ici
        if (userRole === 'Formation Sanitaire') {
          next();
        } else {
          next('/'); // Redirection si non autorisé
        }
      },
    },
    // Administrateur Dashboard
    {
      path: '/adDashboard',
      name: 'adDashboard',
      component: adDashboardView,
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore(); // Modification ici
        const userRole = userStore.user.role; // Modification ici
        if (userRole === 'Administrateur') {
          next();
        } else {
          next('/'); // Redirection si non autorisé
        }
      },
    },
    // Super Administrateur Dashboard
    {
      path: '/saDashboard',
      name: 'saDashboard',
      component: saDashboardView,
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore(); // Modification ici
        const userRole = userStore.user.role; // Modification ici
        if (userRole === 'Super Administrateur') {
          next();
        } else {
          next('/'); // Redirection si non autorisé
        }
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router;
