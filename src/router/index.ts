import { createRouter, createWebHistory } from 'vue-router'
import QuizHomeView from '@/views/QuizHome.vue'
import QuizPageView from '@/views/QuizPage.vue'
import QuizResultView from '@/views/QuizResult.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuizHomeView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizPageView,
    },
    {
      path: '/result',
      name: 'result',
      component: QuizResultView,
    },
    { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
  ],
})

export default router
