import Vapi from "vuex-rest-api";

const profile = new Vapi({
  baseURL: "http://localhost:3000"
}).getStore();

const mutations = {
    
}

const action = {
  login: ({ state, commit }, email, password) => {}
};

export default {
  namespaced: true,
  getters: { ...profile.getters },
  mutations: { ...profile.mutations },
  actions: { ...profile.actions }
};
