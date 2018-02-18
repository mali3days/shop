import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import * as actions from './actions';
import * as getters from './getters';

import products from './modules/products';
import orders from './modules/orders';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    products,
    orders,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
