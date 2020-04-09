import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import About from "./components/About";
import Logs from './components/Logs';
import QATable from './components/QATable';


const router = new Router({
  routes: [
      { path: '/', component: QATable },
      { path: '/logs', component: Logs },
      { path: '/about', component: About },
  ],
  mode: 'history'
});

export default router;
