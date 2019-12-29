<template>
  <div class="scroll-item">
    <router-link
      class="text-secondary scroll-item-link"
      :to="{ name: 'productDetail', params: { productId: item.id } }"
    >
      <vue-responsive-image
        :image-url="item.img_source"
        :show-error-image="true"
        :width-on-screen="10"
        :image-ratio="4 / 3"
        :image-class="'card-img-top'"
      ></vue-responsive-image>
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
  height: auto;
  width: 320px;
  font-size: 15px;
  text-decoration: none solid rgb(34, 34, 34);
  text-align: center;
  vertical-align: top;
  margin: 0 0 30px 0;
  padding: 0 43px 0 43px;
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .scroll-item-image {
    max-width: 267px;
  }

  .scroll-item-link {
    text-decoration: none;
    max-width: 267px;
  }
}
</style>
