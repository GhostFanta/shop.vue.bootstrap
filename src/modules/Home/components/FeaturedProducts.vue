<template>
  <div class="featured-products">
    <hr />
    <carousel pagination-padding="1" per-page="3" navigation-enabled="true">
      <slide v-for="item in featuredProducts" :key="item.id">
        <ScrollItem :item="item" />
      </slide>
    </carousel>
    <hr />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ScrollItem from "./ScrollItem";
export default {
  name: "FeaturedProducts",
  components: { ScrollItem },
  props: {
    products: { type: Array, default: () => [] }
  },
  async created() {
    await this.getFeaturedProducts();
  },
  computed: {
    ...mapGetters("products", ["featuredProducts"])
  },
  methods: {
    ...mapActions("products", ["getFeaturedProducts"])
  }
};
</script>
<style lang="scss" scoped>
.featured-products {
  margin: 0 0 20px 0;
}
</style>
