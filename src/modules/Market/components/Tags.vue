<template>
  <div class="tags">
    <button class="btn badge badge-pill badge-primary">Portrait</button>
    <button class="btn badge badge-pill badge-secondary">Portrait</button>
    <button class="btn badge badge-pill badge-success">Portrait</button>
    <button class="btn badge badge-pill badge-danger">Portrait</button>
    <button class="btn badge badge-pill badge-warning">Portrait</button>
    <button class="btn badge badge-pill badge-info">Portrait</button>
    <button class="btn badge badge-pill badge-light">Portrait</button>
    <button class="btn badge badge-pill badge-dark">Portrait</button>
  </div>
</template>
<script>
export default {
  name: "Tags",
  props: {}
};
</script>
<style lang="scss" scoped>
  .tags > button {
    margin: 0 2px 0 0;
  }
</style>
