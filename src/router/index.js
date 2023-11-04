// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Voltage from '@/views/VoltageView.vue'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'voltage',
        name: 'Voltage',
        meta: {
          title: 'Voltage'
        },
        component: Voltage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
