<template>
  <div class="z-container">
    <HomeJumbtron />
    <h1 class="text-secondary">Featured Products</h1>
    <FeaturedProducts />
    <h1 class="text-secondary text-right">Values</h1>
    <Values />
  </div>
</template>
<script>
import HomeJumbtron from "./components/Jumbtron";
import FeaturedProducts from "./components/FeaturedProducts";
import Values from "./Values";
export default {
  components: { Values, FeaturedProducts, HomeJumbtron }
};
</script>
<style lang="scss" scoped></style>
