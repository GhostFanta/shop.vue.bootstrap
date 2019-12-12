import Vue from "vue";
import SvgIcon from "vue-svgicon";
import VueCarousel from "vue-carousel";
import VueSlider from "vue-slider-component";
import VueResponsiveImage from "vue-responsive-image/src/plugin";

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
