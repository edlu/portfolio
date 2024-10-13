import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/project/yahoo-fantasy-mobile', name: 'FantasyApp', component: ()=>import('@/views/projects/FantasyApp.vue')},
    {path: '/project/yahoo-fantasy-apple-watch', name: 'FantasyWatch', component: ()=>import('@/views/projects/FantasyWatch.vue')},
    {path: '/project/yahoo-daily-fantasy', name: 'DailyFantasy', component: ()=>import('@/views/projects/DailyFantasy.vue')},
    {path: '/project/tixtrack', name: 'TixTrack', component: ()=>import('@/views/projects/TixTrack.vue')},
    {path: '/project/ripplematch', name: 'RippleMatch', component: ()=>import('@/views/projects/RippleMatch.vue')},
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; 
  }
});

export default router;