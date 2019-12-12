<template>
  <div class="product">
    <div class="card">
      <img class="card-img-top" :src="product.img_source" alt="" />
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">
          {{ product.description }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: {
    product: { type: Object, default: null }
  }
};
</script>
<style lang="scss" scoped></style>
