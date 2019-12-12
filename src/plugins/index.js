import "../assets/index.scss";
import SvgIcon from "vue-svgicon";


export default {
  install(Vue) {
    Vue.use(SvgIcon, {
      tagName: "icon"
    });
  }
};
