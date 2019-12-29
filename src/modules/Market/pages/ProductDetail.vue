<template>
  <div class="product-detail justify-content-center container">
    <div v-if="pending.productDetail" class="d-flex justify-content-center">
      <Spinner></Spinner>
    </div>
    <div v-else class="row">
      <div class="col-lg-4">
        <vue-responsive-image
          :image-url="productDetail.img_source"
          :image-ratio="4 / 3"
          :image-class="'card-img-top'"
        >
        </vue-responsive-image>
      </div>
      <div class="col-lg-8">
        <h3>{{ productDetail.name }}</h3>
        <br />
        <p class="product-detail-description">
          {{ productDetail.description }}
        </p>

        <div class="input-group">
          <button class="btn btn-outline-dark btn-lg btn-square counter">
            <icon name="minus" width="12" height="12" />
          </button>
          <input
            class="input-counter"
            type="number"
            step="1"
            max=""
            min="1"
            :value="count"
          />
          <button class="btn btn-outline-dark btn-lg btn-square counter">
            <icon name="plus" width="12" height="12" />
          </button>

          <button
            class="btn-add-to-cart btn btn-outline-dark btn-lg float-right"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "../../../components/Spinner";
export default {
  name: "ProductDetail",
  components: { Spinner },
  data() {
    return {
      count: 1
    };
  },
  computed: {
    ...mapGetters("product", ["productDetail", "pending"])
  },
  async created() {
    await this.getProductById({
      params: { productId: this.$route.params.productId }
    });
  },
  methods: {
    ...mapActions("product", ["getProductById"])
  }
};
</script>
<style lang="scss" scoped>
.product-detail {
  h3 {
    width: 100%;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #d9d9d9;
  }

  .product-detail-description {
    padding: 0 20px 0 0;
  }

  .btn-square {
    border-radius: 0;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .counter:hover {
    svg {
      fill: white;
    }
  }

  .input-counter {
    width: 48px;
    border: 1px solid black;
    text-align: center;
  }

  .btn-add-to-cart {
    margin: 20px 0 20px 0;
    border-radius: 0;
  }

  .input-group {
    display: inline;
    clear: both;
    justify-content: center;
    align-items: center;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input textarea {
      height: 34px;
      width: 100px;
      border: 1px solid #eeeeee;
      box-sizing: border-box;
      margin: 0;
      outline: none;
      padding: 10px;
    }
  }
}
</style>