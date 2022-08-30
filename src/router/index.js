import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CPUGraph from '../views/CPUGraph.vue'
import GPUGraph from '../views/GPUGraph.vue'
import CPUWorkerGraph from '../views/CPUWorkerGraph.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cpu',
      name: 'CPUGraph',
      component: CPUGraph
    },
    {
      path: '/gpu',
      name: 'GPUGraph',
      component: GPUGraph
    },
    {
      path: '/cpu-worker',
      name: 'CPUWorkerGraph',
      component: CPUWorkerGraph
    },
  ]
})

export default router
