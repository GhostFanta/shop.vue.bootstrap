<template>
  <div class="tags">
    <div v-if="pending.tags">
      <Spinner normal />
    </div>
    <div class="col-11" v-else>
      <button
        :key="tag"
        v-for="tag in coloredTags"
        :class="{
          'bg-success': tag.color === 0,
          'bg-info': tag.color === 1,
          'bg-secondary': tag.color === 2,
          'bg-primary': tag.color === 3,
          'bg-warning': tag.color === 4
        }"
        class="btn rounded badge badge-pill mr-1 text-white font-weight-light"
      >
        {{ tag.tag }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "../../../components/Spinner";
export default {
  name: "Tags",
  components: { Spinner },
  computed: {
    ...mapGetters("product", ["tags", "pending"]),
    coloredTags() {
      return this.tags.map(tag => {
        return { tag: tag, color: Math.floor(Math.random() * 5) };
      });
    }
  },
  created() {
    this.getProductTags();
  },
  methods: {
    ...mapActions("product", ["getProductTags", "getProducts"])
  }
};
</script>
<style lang="scss" scoped>
.tags > button {
  margin: 0 2px 0 0;
}
</style>
