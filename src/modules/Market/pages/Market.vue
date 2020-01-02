<template>
  <div class="market">
    <div v-if="pending.products" class="d-flex justify-content-center">
      <Spinner normal />
    </div>
    <div v-else class="row">
      <div class="col-lg-8 col-md-8">
        <ProductList :products="displayedProducts" />
      </div>
      <div class="col-lg-4 col-md-4">
        <ProductFilter class="sticky-sidebar" :min-value="0" :max-value="10" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ProductList from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";
import Spinner from "../../../components/Spinner";
export default {
  name: "Market",
  components: { Spinner, ProductFilter, ProductList },
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
    ...mapGetters("product", ["products", "pending"]),
    displayedProducts() {
      return this.products;
    }
  },
  methods: {
    ...mapActions("product", ["getProducts"])
  }
};
</script>
<style lang="scss" scoped>
.sticky-sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 15px 0 0 20px;
  border-left: #6c757d solid 1px;
}

@media (max-width: 53em) {
  .sticky-sidebar {
    border-top: #6c757d solid 1px;
    margin: 20px 0 40px 0;
    border-left: none;
  }
}
</style>
