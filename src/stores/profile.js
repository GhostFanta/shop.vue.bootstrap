import Vapi from "vuex-rest-api";

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
  login: ({ state }, email, password) => {
    state.pending.logging = true;
    if (email === "test@alex.me" && password === "123456") {
      this.$session.start();
      this.$session.set("jwt", "Bearer This is a test token");
      this.$notify({
        title: "Welcome back!",
        text: "Nice to see you again!"
      });
      state.pending.logging = false;
      this.$router.push("/");
    } else {
      this.$notify({
        title: "Login failed",
        text:
          "Error logging you in, please double check your email and password."
      });
      state.pending.logging = false;
    }
  },
  logout: () => {
    this.$session.destroy();
    this.$router.push("/");
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
