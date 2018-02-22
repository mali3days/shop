import Vue from 'vue';

import '@/assets/css/nouislider.css';
import '@/assets/css/bootstrap-select.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/jquery.bootstrap-touchspin.css';
import '@/assets/css/owl.carousel.css';
import '@/assets/css/owl.theme.default.css';
import '@/assets/bootstrap/css/bootstrap.css';
import '@/assets/css/style.teal.rounded.css';
import '@/assets/css/shop.css';

import '@/assets/js/jquery';
import '@/assets/bootstrap/js/bootstrap';
import '@/assets/js/jquery.raty-fa';
import '@/assets/js/jquery.ez-plus';
import '@/assets/js/jquery.bootstrap-touchspin';
import '@/assets/js/bootstrap-select';
import '@/assets/js/bootstrap-toolkit';
import '@/assets/js/bootstrap3-typeahead';
import '@/assets/js/owl.carousel';
import '@/assets/js/nouislider';
import '@/assets/js/mimity.detail';
import '@/assets/js/mimity';
import '@/assets/js/mimity.filter-sidebar';

import '@/assets/fonts/fontawesome-webfont.woff2';

import App from './App';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
