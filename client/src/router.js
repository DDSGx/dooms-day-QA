import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HelloWorld from "./components/HelloWorld";
import Todo from './components/Todo';
import Logs from './components/Logs';


const router = new Router({
  routes: [
      { path: '/', component: Todo },
      { path: '/logs', component: Logs },
      { path: '/about', component: HelloWorld },
  ],
  mode: 'history'
});

export default router;
