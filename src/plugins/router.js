// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importer les composants pour chaque route
import About from '@/components/About.vue';
import Home from '@/components/Home.vue';

// Créer le routeur
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: 'home',
    },
  ],
});

export default router;
