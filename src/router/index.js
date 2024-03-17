import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import TreatmentView from '@/views/TreatmentView.vue';
import ProductView from '@/views/ProductView.vue';
import AccessabilityView from '@/views/AccessabilityView.vue';
import BookingView from '@/views/BookingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: HomeView
    },
    {
      path: '/omoss',
      name: 'om oss',
      component: AboutView
    },
    {
      path: '/behandlingar',
      name: 'behandlingar',
      component: TreatmentView
    },  
    {
      path: '/produkter',
      name: 'produkter',
      component: ProductView
    },
    {
      path: '/tillganglighet',
      name: 'tillgänglighet',
      component: AccessabilityView
    },
    {
      path: '/boka',
      name: 'boka',
      component: BookingView
    },
  ]
})

export default router





