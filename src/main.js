import Vue from 'vue';
import App from './the-app.vue';
import router from './router';
import i18n from './locale/i18n';

import 'prismjs/themes/prism.css';
import prismMixin from './mixins/prismMixin';

import './plugins';
import './components/shared';

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  i18n,
  mixins: [prismMixin],
  render: (h) => h(App),
}).$mount('#app');
