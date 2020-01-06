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
        <ProductFilter
          class="sticky-sidebar"
          :min-value="minPrice"
          :max-value="maxPrice"
          @change="handleChange"
        />
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
  data() {
    return {
      filterCurrentVal: Number.MAX_SAFE_INTEGER
    };
  },
  computed: {
    ...mapGetters("product", ["products", "pending"]),
    displayedProducts() {
      return this.products.filter(item => {
        if (item.price <= this.filterCurrentVal) {
          return item;
        }
      });
    },
    minPrice() {
      return this.products.reduce(
        (min, current) => (min > current.price ? current.price : min),
        this.products[0].price
      );
    },
    maxPrice() {
      return this.products.reduce(
        (max, current) => (max < current.price ? current.price : max),
        this.products[0].price
      );
    }
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
    handleChange(val) {
      this.filterCurrentVal = val;
    }
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
