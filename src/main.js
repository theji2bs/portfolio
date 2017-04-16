import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import App from './App';
import router from './router';

// Libs used by Vue
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
