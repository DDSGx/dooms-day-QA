import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import About from "./components/About";
import History from './components/History';
import QATable from './components/QATable';
import Settings from './components/Settings';


const router = new Router({
  routes: [
      { path: '/', component: QATable },
      { path: '/history', component: History },
      { path: '/about', component: About },
      { path: '/settings', component: Settings },
  ],
  mode: 'history'
});

export default router;
