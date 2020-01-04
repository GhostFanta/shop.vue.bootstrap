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
  computed: {
    ...mapGetters("order", ["cart", "pending"]),
    totalPrice() {
      return 1;
    }
  },
  async created() {
    const userId = this.$route.params && this.$route.params.userId;
    await this.getCart({ params: { userId: userId } });
  },
  methods: {
    ...mapActions("order", ["getCart"])
  }
};
</script>
<style lang="scss" scoped></style>
