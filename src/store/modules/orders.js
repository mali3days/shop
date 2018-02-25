import ordersApi from '../../api/orders';
import * as types from '../mutation-types';

// initial state
const state = {
  data: [],
  ordersSending: false,
  ordersSended: false,
  error: false,
};

// getters
const getters = {
  error: state => state.error,
  products: state => state.all,
};

// actions
const actions = {
  /* orders */
  async sendOrder({ commit }, { order }) {
    //eslint-disable-next-line
    console.log(order);
    commit(types.SEND_ORDER_REQUEST);

    try {
      const response = await ordersApi.sendOrder(order);
      if (response instanceof Error) throw response.response;

      commit(types.SEND_ORDER_SUCCESS, { response });
    } catch (error) {
      commit(types.SEND_ORDER_FAILURE, { error });
    }
  },
};

// mutations
const mutations = {
  /* order */
  [types.SEND_ORDER_REQUEST](state) {
    state.data = state.data;
    state.ordersSending = true;
    state.ordersSended = false;
    state.error = false;
  },
  [types.SEND_ORDER_SUCCESS](state, { response }) {
    state.data = response;
    state.ordersSending = false;
    state.ordersSended = true;
    state.error = false;
  },
  [types.SEND_ORDER_FAILURE](state, { error }) {
    state.data = state.data;
    state.ordersSending = false;
    state.ordersSended = true;
    state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
