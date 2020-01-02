<template>
  <div class="container">
    <hr />
    <div class="row">
      <h3 class="text-dark mr-auto">My cart</h3>
      <button class="btn btn-outline-success">Continue Shopping</button>
    </div>
    <hr />
    <CartItem :key="item.id" v-for="item in cart.cart" :item="item" />
    <hr />
    <p>SubTotal</p>
    <button class="btn btn-success float-right mb-5">Proceed</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "../components/CartItem";
export default {
  name: "Cart",
  components: { CartItem },
  computed: {
    ...mapGetters("order", ["cart"]),
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
