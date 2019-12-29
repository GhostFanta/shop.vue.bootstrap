<template>
  <div class="product-list ">
    <div class="row">
      <Product class="box" :key="product.id" v-for="product in products" :product="product" />
    </div>
  </div>
</template>
<script>
import Product from "./Product";
export default {
  name: "ProductList",
  components: { Product },
  props: {
    products: { type: Array, default: () => [] }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.row {
  width: 100%;
}
.product-list {
  display: flex;
  flex-direction: row-reverse;
}
</style>
