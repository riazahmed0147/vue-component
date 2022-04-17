import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: {
      hits: [],
    }
  },
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get('https://gs-euw1-public-data-prod.s3-eu-west-1.amazonaws.com/new-web/test/products.json');
        commit('SET_PRODUCTS', data.data);
      } catch( error ) {
        alert(error);
        console.log(error);
      }
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
});
