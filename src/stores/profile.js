import Vapi from "vuex-rest-api";

const profile = new Vapi({
  baseURL: "http://localhost:3000"
}).getStore();

export default {
  namespaced: true,
  getters: { ...profile.getters },
  mutations: { ...profile.mutations },
  actions: { ...profile.actions }
};
