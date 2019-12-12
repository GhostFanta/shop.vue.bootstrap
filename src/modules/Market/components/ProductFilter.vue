<template>
  <div class="product-filter">
    <h5 class="text-secondary mb-4">Filter by Price</h5>
    <vue-slider
      :model="value"
      :min="minValue"
      :max="maxValue"
      :height="10"
      :width="200"
      :process-dragable="true"
    />
    <p>See products under $ {{ value }}</p>
    <h5 class="text-secondary">Filter by Tag</h5>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
export default {
  name: "ProductFilter",
  components: {
    VueSlider
  },
  props: {
    minValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: 10 }
  },
  data() {
    return {
      value: 0
    };
  },
  computed: {}
};
</script>
<style></style>
