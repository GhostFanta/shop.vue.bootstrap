<template>
  <div class="featured-products">
    <div v-if="pending.featuredProducts" class="d-flex justify-content-center">
      <Spinner normal />
    </div>
    <div v-else>
      <hr />
      <carousel
        :pagination-padding="1"
        :per-page="3"
        :navigation-enabled="true"
      >
        <slide v-for="item in featuredProducts" :key="item.id">
          <ScrollItem :item="item" />
        </slide>
      </carousel>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ScrollItem from "./ScrollItem";
import Spinner from "../../../components/Spinner";
export default {
  name: "FeaturedProducts",
  components: { Spinner, ScrollItem },
  props: {
    products: { type: Array, default: () => [] }
  },
  async created() {
    await this.getFeaturedProducts();
  },
  computed: {
    ...mapGetters("product", ["featuredProducts", "pending"])
  },
  methods: {
    ...mapActions("product", ["getFeaturedProducts"])
  }
};
</script>
<style lang="scss" scoped>
.featured-products {
  margin: 0 0 20px 0;
}
</style>
