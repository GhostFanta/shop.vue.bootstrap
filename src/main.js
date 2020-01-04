import Vue from "vue";
import SvgIcon from "vue-svgicon";
import VueCarousel from "vue-carousel";
import VueSlider from "vue-slider-component";
import VueResponsiveImage from "vue-responsive-image/src/plugin";
import Notification from "vue-notification";
import BootstrapVue from "bootstrap-vue";
import VueSession from "vue-session/index.esm";
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import "@/utils/validationRules";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import "./assets/index.scss";
import "vue-slider-component/theme/default.css";

Vue.config.productionTip = false;
Vue.use(SvgIcon, {
  tagName: "icon"
});
Vue.use(VueCarousel);
Vue.use(VueResponsiveImage);
Vue.use("VueSlider", VueSlider);
Vue.use(BootstrapVue);
Vue.use(Notification);
Vue.use(VueSession, {
  persist: true
});
Vue.component("ValidationProvider", ValidationProvider);
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
