import Vapi from "vuex-rest-api";
import Vue from "vue";

const profile = new Vapi({
  baseURL: "http://localhost:3000"
}).getStore();

const state = {
  pending: {
    logging: false
  }
};

const mutations = {};

const actions = {
  login: function({ state }, {email, password}) {
    state.pending.logging = true;
    if (email === "test@alex.me" && password === "123456") {
      Vue.prototype.$session.start();
      Vue.prototype.$session.set("jwt", "Bearer This is a test token");
      Vue.prototype.$session.set("userId", "1");
      Vue.prototype.$notify({
        group: "auth",
        type: "success",
        title: "Welcome back!",
        text: "Nice to see you again!"
      });
      state.pending.logging = false;
    } else {
      Vue.prototype.$notify({
        group: "auth",
        position: "bottom right",
        type: "error",
        title: "Login failed",
        text:
          "Error logging you in, please double check your email and password."
      });
      state.pending.logging = false;
    }
  },
  logout: () => {
    Vue.prototype.$session.destroy();
  },
  register: (email, password) => {
    this.$session.start();
  }
};

const getters = {
  pending: state => state.pending
};

export default {
  namespaced: true,
  state: { ...profile.state, ...state },
  getters: { ...profile.getters, ...getters },
  mutations: { ...profile.mutations, ...mutations },
  actions: { ...profile.actions, ...actions }
};
