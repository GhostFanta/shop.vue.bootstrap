<template>
  <div class="product-list">
      <Product v-for="product in products"/>
  </div>
</template>
<script>
import Product from "./Product";
export default {
  name: "ProductList",
  components: {Product},
  props: {
    products: { type: Array, default: () => [] }
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
