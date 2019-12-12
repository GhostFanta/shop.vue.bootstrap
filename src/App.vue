<template>
  <div id="app">
    <Header />
    <fade-transition origin="center" mode="out-in" :duration="250">
      <router-view />
    </fade-transition>
    <Footer />
  </div>
</template>

<script>
import "./assets/icons";
import {FadeTransition} from 'vue2-transitions';
import Header from "./modules/Components/Header";
import Footer from "./modules/Components/Footer";
export default {
  name: "app",
  components: {
    FadeTransition,
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
#app {
  font-family: "Raleway", sans-serif;
}
</style>
