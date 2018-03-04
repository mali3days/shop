import productsApi from '../../api/products';
import * as types from '../mutation-types';

// initial state
const state = {
  product: null,

  cart: [],

  all: [],
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

const getCartProducts = state => state.cart;

const allData = ['all', 'lastAdded', 'recommended', 'woman'];

// getters
const getters = {
  product: state => state.product,

  products: state => state.all,
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
  getProductById: (state, id) => [
    ...state.lastAdded,
    ...state.all,
    ...state.woman,
    ...state.recommended,
  ].find((product) => {
    if (product._id === id) {
      console.log('FINDED');
      return product;
    }
    return null;
  }),
};

// actions
const actions = {
  /* products */
  resetProducts({ commit }) {
    commit(types.RESET_PRODUCTS);
  },
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
      console.log(res);
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
  [types.RESET_PRODUCTS](state) {
    state.product = null;
    state.cart = [];

    state.all = [];
    state.lastAdded = [];
    state.recommended = [];
    state.woman = [];

    state.error = false;
    state.dataFething = false;
    state.dataFetched = false;

    state.pagination = {
      limit: 8,
      offset: 0,
      total: 0,
    };
  },
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
      current.qty = 1;
      current.inCart = true;
      const cart = [current, ...state.cart];

      toggleCartItems(current);

      state.cart = [...new Set(cart)];
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
      const cartWithoutCurrent = state.cart.filter(p => p._id !== current._id);

      delete (current.qty);
      delete (current.inCart);

      toggleCartItems(current);

      state.cart = [...new Set(cartWithoutCurrent)];
    } else {
      //eslint-disable-next-line
      console.error('something go wrong');
    }
  },
  [types.CLEAR_CART](state) {
    state.cart = [];
  },
  [types.CART_FAILURE](state, { error }) {
    state.error = error;
  },
};

function toggleCartItems(current) {
  allData.forEach((string) => {
    if (state[string].length === 0) return;
    const elem = state[string].find((c) => {
      if (c && current) {
        c._id === current._id;
        return current;
      }
      return null;
    });
    const newRecom = [...state[string], elem];
    state[string] = [...new Set(newRecom)];
  });
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
