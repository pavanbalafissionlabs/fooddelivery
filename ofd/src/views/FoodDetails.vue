<template>
  <div>
    <h4>Add to cart</h4>

    <div>
      <h5>Name:{{ details.name }}</h5>
      <h5>price: {{ details.price }}</h5>
    </div>
    <div>
      <button v-on:click="goTOcart">Go to cart</button>
      <button v-on:click="addToCart" href="Homes">Add item</button>
      <button v-on:click="removeItem">remove item</button>
    </div>
    <!-- <div>{{ count }}</div> -->
  </div>
</template>

<script>
export default {
  name: "FoodDetails",
  data() {
    return {
      details: this.$route.params,
    };
  },
  //   computed: {
  //     count() {
  //       return this.$store.state.cartItemCount;
  //     },
  //   },
  methods: {
    goTOcart() {
      this.$router.push("/Cart");
    },
    addToCart() {
      this.$router.push("/Homes");
      this.$store.dispatch("addTocart", this.details);
    },
    removeItem() {
      this.$router.push("/Cart");
      this.$store.dispatch("removeItem", this.details);
    },
  },
};
</script>

<style lang="scss" scoped></style>
