import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Vue from "vue";

export default [
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter(to, from, next) {
      if (!Vue.prototype.$session.get("jwt") || !Vue.prototype.$session) {
        next("/login");
      } else {
        next();
      }
    }
  },
  { path: "/signup", name: "signup", component: Auth },
  { path: "/login", name: "login", component: Auth }
];
