<template>
  <div class="market">
    <div class="row">
      <div class="col-lg-8">
        <ProductList :products="displayedProducts" />
      </div>
      <div class="col-lg-4">
        <ProductFilter :min-value="0" :max-value="10" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ProductList from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";
export default {
  name: "Market",
  components: { ProductFilter, ProductList },
  async created() {
    if (this.$route.query) {
      await this.getProducts({
        params: { category: this.$route.query.category }
      });
      return;
    }
    await this.getProducts();
  },
  computed: {
    ...mapGetters("product", ["products"]),
    displayedProducts() {
      return this.products;
    },
  },
  methods: {
    ...mapActions("product", ["getProducts"])
  }
};
</script>
<style lang="scss" scoped></style>
