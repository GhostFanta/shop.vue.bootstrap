<template>
  <div>
    <div class="d-flex mb-3">
      <hr />
      <div class="col-3">
        <img class="card-img-top" :src="item.img_source" alt="" />
      </div>
      <div class="col-6">
        <strong>{{ item.name }}</strong>
      </div>
      <div class="col-3">
        <strong>${{ item.price }} x {{ item.amount }}</strong>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: { type: Object, default: null }
  }
};
</script>
<style lang="scss" scoped></style>
