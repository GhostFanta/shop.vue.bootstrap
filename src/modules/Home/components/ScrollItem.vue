<template>
  <div class="scroll-item">
    <router-link class="text-secondary scroll-item-link" to="/product/:id">
      <img class="scroll-item-image" :src="item.img_source" />
      <div class="scroll-item-body">
        <h5>{{ item.name }}</h5>
        <strong>Price: ${{ item.price }}</strong>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ScrollItem",
  props: {
    item: { type: Object, default: null }
  }
};
</script>
<style lang="scss" scoped>
.scroll-item {
  height: 250px;
  width: 320px;
  font-size: 15px;
  text-decoration: none solid rgb(34, 34, 34);
  text-align: center;
  vertical-align: top;
  margin: 0 0 30px 0;
  padding: 0 43px 0 43px;
  max-width: 330px;
  display: inline-block;
  cursor: pointer;

  .scroll-item-image {
  }

  .scroll-item-link {
    text-decoration: none;
  }
}
</style>
