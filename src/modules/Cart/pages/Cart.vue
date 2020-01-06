<template>
  <div class="container">
    <div v-if="pending.cart" class="d-flex justify-content-center">
      <Spinner normal />
    </div>
    <div v-else>
      <hr />
      <div class="row">
        <h3 class="text-dark mr-auto">My cart</h3>
        <router-link to="/category" class="btn btn-outline-success"
          >Continue Shopping</router-link
        >
      </div>
      <hr />
      <CartItem :key="item.id" v-for="item in cart.cart" :item="item" />
      <hr />
      <p>SubTotal: ${{ totalPrice }}</p>
      <button class="btn btn-success float-right mb-5">Proceed</button>
      <button
        class="btn btn-danger mb-5"
        data-toggle="modal"
        data-target="#clearCartModal"
        @click="toggleModal"
      >
        Clear Shopping Cart
      </button>
      <b-modal
        class="modal fade"
        tabindex="-1"
        role="dialog"
        v-model="showModal"
        title="Clear Cart?"
      >
        <div class="d-block text-center">
          <h3>Do you want to clear your cart?</h3>
        </div>
        <template v-slot:modal-footer>
          <div class="d-flex">
            <button class="p-2 mt-2 btn btn-outline-info" @click="toggleModal">
              Cancel
            </button>
            <button
              class="p-2 mt-2 ml-2 btn btn-outline-danger"
              @click="toggleModal"
            >
              Clear Cart
            </button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "../components/CartItem";
import Spinner from "../../../components/Spinner";
export default {
  name: "Cart",
  components: { Spinner, CartItem },
  watch: {
    cart(to) {
      let price = 0;
      for (let item in to.cart) {
        price += Number(to.cart[item].price) * Number(to.cart[item].amount);
      }
      this.totalPrice = price;
    }
  },
  data() {
    return {
      totalPrice: 0,
      showModal: false
    };
  },
  computed: {
    ...mapGetters("order", ["cart", "pending"])
  },
  async created() {
    const userId = this.$route.params && this.$route.params.userId;
    await this.getCart({ params: { userId: userId } });
  },
  methods: {
    ...mapActions("order", ["getCart", "clearCart"]),
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
}
</style>
