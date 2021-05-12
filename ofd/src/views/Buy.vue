<template>
  <div>
    <div class="A">
      <form action="">
        <fieldset>
          <legend>Bill</legend>

          <div
            v-on:click="foodDetails(items)"
            v-for="items in topRated"
            :key="items.id"
          >
            <h5>Item:{{ items.name }}</h5>
            <h5>price: {{ items.price }}$</h5>
            <h5>Gst:{{ items.gst }}</h5>
            total ={{ items.price + items.gst }}$
          </div>
          <!-- <div v-for="items in Nearyou" :key="items.id">
            <h5>{{ items.name }}</h5>

            <h5>price {{ items.price }}$</h5>
          </div> -->
          <!-- <div v-for="items in all" :key="items.id">
            <h5>{{ items.name }}</h5>
<h5>{{ items.gst }}</h5>
            <h5>price {{ items.price }}$</h5>
            total ={{ items.price + items.price }}
          </div> -->
          <input type="submit" value="processed" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gst: 10,
    };
  },
  // methods: {
  //   foodDetails(item) {
  //     this.$route.push({ name: "fooddetails", params: item });
  //   },
  // },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    all() {
      return this.$store.state.all;
    },
    Nearyou() {
      return this.$store.state.Nearyou;
    },
  },
  methods: {
    foodDetails(item) {
      this.$route.push({ name: "fooddetails", params: item });
    },
  },
};
</script>

<style scoped>
fieldset {
  background-color: #eeeeee;
}

legend {
  background-color: gray;
  color: white;
  padding: 5px 10px;
}

input {
  margin: 5px;
}
.A {
  width: 50%;
  margin-left: 25%;
}
</style>
