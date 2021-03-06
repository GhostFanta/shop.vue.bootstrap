<template>
  <div class="product-detail justify-content-center container">
    <div v-if="pending.productDetail" class="d-flex justify-content-center">
      <Spinner normal />
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
          <button class="btn btn-outline-dark" @click="clickMinus">
            <i class="fa fa-minus"></i>
          </button>
          <input
            class="input-counter"
            type="number"
            step="1"
            max=""
            min="1"
            readonly
            v-model="count"
          />
          <button class="btn btn-outline-dark" @click="clickPlus">
            <i class="fa fa-plus"></i>
          </button>

          <button
            class="btn-add-to-cart btn btn-outline-dark btn-lg float-right"
            @click="addToCart"
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
  watch: {
    pending(to) {
      if (to) {
        this.$notify({
          group: "cart",
          title: "New items are added to cart."
        });
      }
    }
  },
  methods: {
    ...mapActions("product", ["getProductById"]),
    ...mapActions("order", ["addItemToCart"]),
    clickPlus() {
      this.count++;
    },
    clickMinus() {
      if (this.count > 1) {
        this.count--;
      }
    },
    async addToCart() {
      if (!this.$session.get("jwt")) {
        this.$notify({
          group: "auth",
          type: "warning",
          title: "Please login to proceed",
          text: "You need to login to get access to your cart :)"
        });
      } else {
        await this.addItemToCart({
          params: { userId: this.$session.get("userId") },
          data: {
            productId: this.productDetail.id,
            amount: this.count
          }
        });
        this.$notify({
          group: "cart",
          type: "success",
          title: "Added to Cart",
          text: "Your choices have been added to cart."
        });
      }
    }
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

  .input-group {
    display: inline;
    clear: both;
    justify-content: center;
    align-items: center;

    .btn-square {
      border-radius: 0;
      height: 29px;
      justify-content: center;
      align-items: center;
      font-size: 29px;
    }
    .counter:hover {
      svg {
        fill: white;
      }
    }

    .input-counter {
      width: 47px;
      border: 0px solid black;
      text-align: center;
      margin: 0 3px 0 3px;
    }

    .btn-add-to-cart {
      margin: 19px 0 20px 0;
      border-radius: 0;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
