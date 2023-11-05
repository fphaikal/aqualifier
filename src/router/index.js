// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Voltage from '@/views/VoltageView.vue'
import System from '@/views/SystemView.vue'
import Error from '@/views/ErrorView.vue'
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
      {
        path: 'system',
        name: 'System',
        meta: {
          title: 'System'
        },
        component: System,
      },
      {
        path: 'error',
        name: 'Error',
        meta: {
          title: 'Error Log '
        },
        component: Error,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
