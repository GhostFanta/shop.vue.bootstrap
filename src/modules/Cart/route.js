import Cart from "./pages/Cart";
import Vue from "vue";

export default [
  {
    path: "/cart/:userId",
    name: "Cart",
    component: Cart,
    beforeEnter(to, from, next) {
      if (!Vue.prototype.$session.get("jwt") || !Vue.prototype.$session) {
        next("/login");
      } else {
        next();
      }
    }
  }
];
