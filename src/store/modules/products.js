import productsApi from '../../api/products';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  product: null,
  lastAdded: [],
  recommended: [],
  woman: [],

  error: false,
  dataFething: false,
  dataFetched: false,

  pagination: {
    limit: 8,
    offset: 0,
    total: 0,
  },
};

const getCartProducts = state => state.all.filter(product => product.inCart);

// getters
const getters = {
  products: state => state.all,
  product: state => state.product,
  lastAdded: state => state.lastAdded,
  recommended: state => state.recommended,
  woman: state => state.woman,

  error: state => state.error,
  pagination: state => state.pagination,

  cart: getCartProducts,
  cartPrice: () => getCartProducts(state)
    .reduce((summ, product) => summ + (product.price.total * (product.qty || 1)), 0),
  dataFetched: state => state.dataFetched,
  // eslint-disable-next-line
  getProductById: (state, id) => [...state.all, state.lastAdded, ...state.woman, ...state.recommended].find(product => product._id === id),
};

// actions
const actions = {
  /* products */
  async getProducts({ commit }, opts = null) {
    try {
      const products = await productsApi.getProducts(opts);

      commit(types.RECEIVE_PRODUCTS_SUCCESS, { products });
    } catch (error) {
      commit(types.RECEIVE_PRODUCTS_FAILURE, { error });
    }
  },
  async getProductByModel({ commit }, opts) {
    try {
      const product = await productsApi.getProductByModel(opts);
      commit(types.RECEIVE_PRODUCT_SUCCESS, { product });
    } catch (error) {
      commit(types.RECEIVE_PRODUCT_FAILURE, { error });
    }
  },
  async getLastaddedProducts({ commit }) {
    try {
      const products = await productsApi.getLastaddedProducts(5);
      commit(types.RECEIVE_LAST_ADDED_PRODUCTS_SUCCESS, { products });
    } catch (error) {
      commit(types.RECEIVE_LAST_ADDED_PRODUCTS_FAILURE, { error });
    }
  },
  async getRecommendedProducts({ commit }) {
    try {
      const products = await productsApi.getRecommendedProducts(4);
      commit(types.RECEIVE_RECOMMENDED_PRODUCTS_SUCCESS, { products });
    } catch (error) {
      commit(types.RECEIVE_RECOMMENDED_PRODUCTS_FAILURE, { error });
    }
  },
  async getWomanProducts({ commit }, opts) {
    try {
      const res = await productsApi.getWomanProducts(opts);
      commit(
        types.RECEIVE_WOMAN_PRODUCTS_SUCCESS,
        res,
      );
    } catch (error) {
      commit(types.RECEIVE_WOMAN_PRODUCTS_FAILURE, { error });
    }
  },

  /* cart */
  addProductToCart({ commit }, { id }) {
    //eslint-disable-next-line
    console.log(id);
    try {
      commit(types.ADD_PRODUCT_TO_CART, { id });
    } catch (error) {
      commit(types.CART_FAILURE, { error });
    }
  },
  changeProductQty({ commit }, { id, qty }) {
    try {
      commit(types.CHANGE_PRODUCT_QTY, { id, qty });
    } catch (error) {
      commit(types.CART_FAILURE, { error });
    }
  },
  removeProductFromCart({ commit }, { id }) {
    try {
      commit(types.REMOVE_PRODUCT_FROM_CART, { id });
    } catch (error) {
      commit(types.CART_FAILURE, { error });
    }
  },
  clearCart({ commit }) {
    try {
      commit(types.CLEAR_CART);
    } catch (error) {
      commit(types.CART_FAILURE, { error });
    }
  },
};

// mutations
const mutations = {

  /* products */
  [types.RECEIVE_PRODUCTS_SUCCESS](state, { products }) {
    state.all = products;
    state.error = false;
    state.dataFetched = true;
    state.dataFething = false;
  },
  [types.RECEIVE_PRODUCTS_FAILURE](state, { error }) {
    state.error = error;
    state.dataFetched = false;
    state.dataFething = false;
  },

  /* One product */
  [types.RECEIVE_PRODUCT_SUCCESS](state, { product }) {
    state.product = product;
    state.error = false;
    state.dataFetched = true;
    state.dataFething = false;
  },
  [types.RECEIVE_PRODUCT_FAILURE](state, { error }) {
    state.error = error;
    state.dataFetched = false;
    state.dataFething = false;
  },
  /*  */

  [types.RECEIVE_LAST_ADDED_PRODUCTS_SUCCESS](state, { products }) {
    state.lastAdded = products;
    state.error = false;
    state.dataFetched = true;
    state.dataFething = false;
  },
  [types.RECEIVE_LAST_ADDED_PRODUCTS_FAILURE](state, { error }) {
    state.error = error;
    state.dataFetched = false;
    state.dataFething = false;
  },
  [types.RECEIVE_RECOMMENDED_PRODUCTS_SUCCESS](state, { products }) {
    state.recommended = products;
    state.error = false;
    state.dataFetched = true;
    state.dataFething = false;
  },
  [types.RECEIVE_RECOMMENDED_PRODUCTS_FAILURE](state, { error }) {
    state.error = error;
    state.dataFetched = false;
    state.dataFething = false;
  },
  [types.RECEIVE_WOMAN_PRODUCTS_SUCCESS](state, res) {
    state.woman = res.products;
    state.pagination = res.pagination;
    state.error = false;
    state.dataFetched = true;
    state.dataFething = false;
  },
  [types.RECEIVE_WOMAN_PRODUCTS_FAILURE](state, { error }) {
    state.error = error;
    state.dataFetched = false;
    state.dataFething = false;
  },

  /* cart */
  [types.ADD_PRODUCT_TO_CART](state, { id }) {
    const current = getters.getProductById(state, id);
    if (current) {
      current.inCart = true;
      current.qty = 1;
      state.all.splice(state.all.indexOf(current), 1, current);
    } else {
      //eslint-disable-next-line
      console.error('something go wrong');
    }
  },
  [types.CHANGE_PRODUCT_QTY](state, { id, qty }) {
    const current = getters.getProductById(state, id);
    if (current) {
      current.qty = qty;
      state.all.splice(state.all.indexOf(current), 1, current);
    } else {
      //eslint-disable-next-line
      console.error('something go wrong');
    }
  },
  [types.REMOVE_PRODUCT_FROM_CART](state, { id }) {
    const current = getters.getProductById(state, id);
    if (current) {
      delete (current.inCart);
      state.all.splice(state.all.indexOf(current), 1, current);
    } else {
      //eslint-disable-next-line
      console.error('something go wrong');
    }
  },
  [types.CLEAR_CART](state) {
    // const cart = getters.cart(state);
    // cart.forEach((elem) => {
    //   delete (elem.inCart);
    // });
    state.all = state.all.map((elem) => {
      if (elem.inCart) {
        delete (elem.inCart);
        delete (elem.qty);
      }
      return elem;
    });
  },
  [types.CART_FAILURE](state, { error }) {
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
