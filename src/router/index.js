import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import NewUser from '@/components/NewUser';
import User from '@/components/User';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/user/add',
      name: 'Add User',
      component: NewUser,
    },
    {
      path: '/user/:id',
      name: 'Edit User',
      component: User,
      props: true,
    },
  ],
});
