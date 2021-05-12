<template>
  <div>
    <h1>hi</h1>
    <div>
      <h4>my cart</h4>
      <h4>{{ totalprice }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalprice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
