<template>
  <div class="container product-filter">
    <!--    <h2>Filters:</h2>-->
    <h5 class="text-secondary mb-4">Filter by Price</h5>
    <vue-range-slider
      class="slider "
      v-model="value"
      :min="minValue"
      :max="maxValue"
      :height="10"
      :width="200"
      :process-dragable="true"
      @change="handleChange"
    />
    <p>See products under $ {{ value }}</p>
    <h5 class="text-secondary">Tags</h5>
    <Tags />
  </div>
</template>
<script>
import Tags from "./Tags";
export default {
  name: "ProductFilter",
  components: {
    Tags
  },
  props: {
    minValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: 10 }
  },
  data() {
    return {
      value: this.maxValue
    };
  },
  methods: {
    handleChange() {
      this.$emit("change", this.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 80%;
  .range-slider-fill {
    background-color: #007bff;
  }
}
</style>
