import Vue from "vue";
import VueRouter from "vue-router";

import HomeRoute from "./modules/Home/route";
import CartRoute from "./modules/Cart/route";
import MarketRoute from "./modules/Market/route";
import ProfileRoute from "./modules/Profile/route";

Vue.use(VueRouter);

const baseRouter = [];

const routes = baseRouter
  .concat(HomeRoute)
  .concat(CartRoute)
  .concat(MarketRoute)
  .concat(ProfileRoute);

export default new VueRouter({
  mode: "history",
  routes
});
