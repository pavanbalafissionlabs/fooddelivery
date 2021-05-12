import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logindetails: [],
    loggeduser: ["pavan"],
    topRated: [
      {
        id: 1,
        name: "cake",
        price: 100,
        gst: 2,
        url:
          "https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg",
        desc: "good taste",
      },
    ],
    all: [
      {
        id: 1,
        name: "cake",
        price: 100,
        gst: 2,
        url:
          "https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg",
        desc: "good taste",
      },
    ],
    Nearyou: [
      {
        id: 1,
        name: "cake",
        price: 100,
        gst: 2,
        url:
          "https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg",
        desc: "good taste",
      },
    ],
    cartItemsCount: 0,
    cartItems: [],
  },

  mutations: {
    setlogindetails: (state, payload) => {
      state.logindetails = payload;
    },
    addTocart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let booleean = state.cartItems.some((i) => i.id == item.id);
        if (booleean) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemscount++;
    },
    removeitem(state, payload) {
      if (state.cartItems.length > 0) {
        let booleean = state.cartItems.some((i) => i.id == payload.id);
        if (booleean) {
          let itemIndex = state.cartItems.findIndex(
            (el) => el.id === payload.id
          );
          state.cartItems[itemIndex]["quantity"] -= 1;
          state.cartItemsCount--;
        }
      }
    },
  },
  actions: {
    setlogindetails: (state, payload) => {
      state.commit("setlogindetails", payload);
    },
    addTocart: (state, payload) => {
      state.commit("addToCart", payload);
    },
    removeitem: (state, payload) => {
      state.commit("remove", payload);
    },
  },
  getters: {
    listoflogindetails: (state) => state.logindetails,
    listofloggedinuser: (state) => state.loggeduser,
  },
  modules: {},
});
