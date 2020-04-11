import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import About from "./components/About";
import History from './components/History';
import QATable from './components/QATable';


const router = new Router({
  routes: [
      { path: '/', component: QATable },
      { path: '/history', component: History },
      { path: '/about', component: About },
  ],
  mode: 'history'
});

export default router;
