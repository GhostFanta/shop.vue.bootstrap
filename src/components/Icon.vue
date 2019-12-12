<template>
  <icon :height="height" :width="width" :color="color"> </icon>
</template>
<script>
export default {
  name: "Icon",
  data() {
    return {
    };
  },
  props: {
    width: { type: Number, default: 12 },
    height: { type: Number, default: 12 },
    color: { type: String, default: "primary" }
  }
};
</script>
<style></style>
