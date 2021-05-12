import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/Homes",
    name: "Homes",

    component: () => import("../views/Homes.vue"),
  },
  {
    path: "/pizza",
    name: "PizzaHut",

    component: () => import("../views/PizzaHut.vue"),
  },
  {
    path: "/parivar",
    name: "Parivar",

    component: () => import("../views/Parivar.vue"),
  },
  {
    path: "/Icecream",
    name: "Icecream",

    component: () => import("../views/Icecream.vue"),
  },
  {
    path: "/buy",
    name: "Buy",

    component: () => import("../views/Buy.vue"),
  },
  {
    path: "/logout",
    name: "logout",

    component: () => import("../views/logout.vue"),
  },
  {
    path: "/Change",
    name: "Change",

    component: () => import("../views/Change.vue"),
  },
  {
    path: "/food",
    name: "FoodDetails",

    component: () => import("../views/FoodDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
