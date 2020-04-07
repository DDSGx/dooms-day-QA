import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HelloWorld from "./components/HelloWorld";
import Todo from './components/Todo';


const router = new Router({
  routes: [
      { path: '/', component: HelloWorld },
      { path: '/todo', component: Todo }
  ],
  mode: 'history'
});

export default router;
