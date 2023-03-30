import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import WebitelUi from './webitel-ui';
import WebitelCcUi from './webitel-cc-ui';
import WebitelFlowUi from './webitel-flow-ui';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
    return { left: 0, top: 0 };
  },
});

console.info([
  {
    path: '',
    redirect: '/ui'
  },
  ...WebitelUi,
  ...WebitelCcUi,
  ...WebitelFlowUi,
],);

export default router;
