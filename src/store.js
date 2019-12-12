import Vue from "vue";
import Vuex from "vuex";

import product from "./stores/product";
import order from "./stores/order";
import profile from "./stores/profile";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product,
    order,
    profile
  }
});

export default store;