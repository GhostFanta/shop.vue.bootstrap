<template>
  <div id="app">
    <Header />
    <notifications group="auth" position="top center"/>
    <notifications group="cart" position="top center"/>
    <fade-transition origin="center" mode="out-in" :duration="250">
      <div class="content-wrapper">
        <router-view />
      </div>
    </fade-transition>
    <Footer />
  </div>
</template>

<script>
import "./assets/icons";
import { FadeTransition } from "vue2-transitions";
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
#app {
  font-family: "Raleway", sans-serif;
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
