import Vapi from "vuex-rest-api";

const orders = new Vapi({
  baseURL: "http://localhost:3000"
}).getStore();

export default {
  namespaced: true,
  getters: { ...orders.getters },
  mutations: { ...orders.mutations },
  actions: { ...orders.actions }
};
