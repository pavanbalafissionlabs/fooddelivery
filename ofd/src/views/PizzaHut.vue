<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div>
      <!-- <div class="head"><h2>hello pizza</h2></div> -->

      <!-- <div class="pizza"> -->
      <!-- <img
          src="https://media.self.com/photos/606ccf537369ccb45ca42214/4:3/w_384/DiGiorno-Gluten-Free-Pizza-Pepperoni.jpg"
          alt="pizahut"
          width="200"
          height="200"
        /> -->
      <!-- <br />
        Name:<span>PizzaHut</span>
        <br />
        Rating:<Rating>5star</Rating> -->
      <!-- </div> -->

      <!-- items  -->
      <div class="items">
        <div class="product">
          <div class="prodimg">
            <img
              src="https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg"
              height="100%;"
              width="100%"
            />
          </div>
          <div class="proddetails">
            <div class="proddescri">
              <h4>
                cake [Full]
              </h4>
              <p>
                Just for ₹100
              </p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>

              <p>
                [Protein:24g | Carbs:29g | Fats:14g | Fibre:6g]
              </p>
            </div>
            <div class="prodAdd">
              <h2>{{ count }}</h2>
              <button
                id="showmodal"
                class="modal-btn"
                v-on:click="count = count + 1"
              >
                InADD
              </button>
              <button
                id="showmodal"
                class="modal-btn"
                v-on:click="count = count - 1"
              >
                DeADD
              </button>
              <!-- <button id="showmodal" class="modal-btn">
                Buy
              </button> -->
              <a id="showmodal" class="modal-btn" href="Buy">Buy</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="modal-bg">
        <div class="modal">
          <h2>sub</h2>
          <label for="name">Name:</label>
          <input type="text" name="name" />
          <button class="modal button">Subscribe</button>
          <span class="modal-close">X</span>
        </div>
      </div> -->
    </div>
    <!-- item 2 -->
    <div class="items">
      <div class="product">
        <div class="prodimg">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg"
            alt=""
            height="100%;"
            width="100%"
          />
        </div>
        <div class="proddetails">
          <div class="proddescri">
            <h4>
              cake[Full]
            </h4>
            <p>
              Just for ₹100
            </p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>

            <p>
              [Protein:24g | Carbs:29g | Fats:14g | Fibre:6g]
            </p>
          </div>
          <div class="prodAdd">
            <!-- <button id="showmodal" class="modal-btn" @click="Add(event)">
              Add
            </button> -->
            <a id="showmodal" class="modal-btn" href="Buy">Buy</a>
          </div>
        </div>
      </div>
    </div>
    <!-- item 3 -->

    <div class="items">
      <div class="product">
        <div class="prodimg">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg"
            alt=""
            height="100%;"
            width="100%"
          />
        </div>
        <div class="proddetails">
          <div class="proddescri">
            <h4>cake</h4>
            <p>
              Just for ₹100
            </p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>

            <p>
              Spring mix, roasted pesto paneer, spicy broccoli, candy tomatoes,
              organic millets, red cabbage, pesto vinaigrette dressing.
              [Protein:24g | Carbs:29g | Fats:14g | Fibre:6g]
            </p>
          </div>
          <div class="prodAdd">
            <!-- <button id="showmodal" class="modal-btn" @click="Add(event)">
              Add
            </button> -->
            <a id="showmodal" class="modal-btn" href="Buy">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
/* .pizza {
  float: left;
  background: blue;
  height: 500px;
  width: 20%;
} */
.items {
  float: right;
  /* background-color: black; */
  /* height: 500px; */
  width: 70%;
}
.head {
  background: blue;
}
.product {
  /* background: brown; */
  height: 130px;
  width: 95%;
  margin-top: 1%;
  margin-left: 1%;
}
.prodimg {
  float: left;
  background: lightblue;
  height: 130px;
  width: 30%;
}
.proddetails {
  float: right;
  /* background: lightgreen; */
  width: 69%;
  /* height: 130px; */
}
.proddescri {
  float: left;
  margin-left: 2%;
  width: 70%;

  text-align: left;
}
.prodAdd {
  /* height: 130px; */
  width: 19%;
  /* background: wheat; */
  float: right;
}
.modal-btn {
  margin-top: 45%;
}
.checked {
  color: orange;
}
/*
.modal-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s opacity 0, 5s;
}
.bg-active {
  visibility: visible;
  opacity: 1;
}
.modal {
  background-color: white;
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.modal button {
  padding: 10px 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
} */
</style>
