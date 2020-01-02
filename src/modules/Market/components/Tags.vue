<template>
  <div class="tags">
    <div v-if="pending.tags">
      <Spinner normal />
    </div>
    <div class="col-11" v-else>
      <button
        :key="tag"
        v-for="tag in tags"
        class="btn rounded badge badge-pill mr-1"
      >
        {{ tag }}
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
    ...mapGetters("product", ["tags", "pending"])
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
