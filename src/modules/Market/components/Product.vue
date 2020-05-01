<template>
  <div class="product">
    <div class="card justify-content-center mb-2 mr-2">
      <router-link
        :to="{ name: 'productDetail', params: { productId: product.id } }"
      >
        <img class="img-fluid card-img-top" :src="product.img_source" alt="" />
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="text-center">
          <span class="text-dark  mr-3">Price: ${{ product.price }}</span>
        </p>
        <div class="product-btn-wrapper">
          <router-link
            class="btn btn-outline-dark"
            :to="{ name: 'productDetail', params: { productId: product.id } }"
          >
            View Detail
          </router-link>
        </div>
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
<style lang="scss" scoped>
.product {
  height: auto;
  display: flex;
  text-align: center;
  justify-content: center;

  .card {
    width: 18.1rem;
    &:hover {
      box-shadow: 2px 2px 10px 0px rgba(46, 61, 73, 0.2);
      border: 1px solid deepskyblue;
      transition: 0.2s;
    }

    .card-title {
      justify-content: center;
      align-items: center;
    }

    .card-img-top {
      padding: 1px 1px 1px 1px;
    }
    .product-btn-wrapper {
      display: block;
      justify-content: center;
      align-items: center !important;
    }

    .card-body {
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
