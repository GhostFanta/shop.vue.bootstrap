<template>
  <div>
    <div class="d-flex mb-3">
      <hr />
      <div class="col-md-3">
        <img class="card-img-top" :src="item.img_source" alt="" />
      </div>
      <div class="col-md-5 d-flex justify-content-center align-items-center">
        <strong class="p-2">{{ item.name }}</strong>
      </div>
      <div class="col-md-3 d-flex justify-content-center align-items-center">
        <strong class="mr-3">${{ item.price }} x</strong>
        <button class="btn btn-outline-dark btn-sm" @click="clickMinus">
          <i class="fa fa-minus"></i>
        </button>
        <strong class="m-3"> {{ item.amount }} </strong>
        <button class="btn btn-outline-dark btn-sm" @click="clickPlus">
          <i class="fa fa-plus"></i>
        </button>
      </div>
      <div class="col-md-1 d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-danger">
          <i class="fa fa-times" @click="handleDelete"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: { type: Object, default: null }
  },
  methods: {
    handleDelete() {
      this.$emit("clickDelete");
    },
    clickPlus() {
      this.item.amount += 1;
      this.$emit("amountChange", this.item.amount);
    },
    clickMinus() {
      if (this.item.amount > 1) {
        this.item.amount -= 1;
      }
      this.$emit("amountChange", this.item.amount);
    }
  }
};
</script>
<style lang="scss" scoped>
.amount-input {
  text-align: center;
  width: 30px;
  border: 1px solid black;
  text-align: center;
  margin: 0 3px 0 3px;
}
</style>
