import Vue from 'vue';
import VueRouter from 'vue-router';

import WebitelUi from './webitel-ui';
import WebitelCcUi from './webitel-cc-ui';
import WebitelFlowUi from './webitel-flow-ui';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/ui'
    },
    ...WebitelUi,
    ...WebitelCcUi,
    ...WebitelFlowUi,
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
      // Or for Vue 3:
      // return {el: to.hash}
    }
    return { x: 0, y: 0 };
  },
});

export default router;
