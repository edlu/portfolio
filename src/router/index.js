import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import ProjectDetail from '../components/ProjectDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: route => ({
        title: route.query.title,
      })
    }
  ]
});