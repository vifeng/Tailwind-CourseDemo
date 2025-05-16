import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/TheHome.vue"),
  },
  {
    path: "/flexbox",
    name: "Flexbox",
    component: () => import("../views/Flexbox.vue"),
  },
  {
    path: "/basics",
    name: "Basics",
    component: () => import("../views/Basics.vue"),
  },
  {
    path: "/grid",
    name: "Grid",
    component: () => import("../views/Grid.vue"),
  },
  {
    path: "/color",
    name: "ColorPalette",
    component: () => import("../views/ColorPalette.vue"),
  },
  {
    path: "/fonts",
    name: "Fonts",
    component: () => import("../views/Fonts.vue"),
  },
  {
    path: "/prosePlugins",
    name: "prosePlugins",
    component: () => import("../views/ProsePlugin.vue"),
  },
  {
    path: "/princingPlan",
    name: "princingPlan",
    component: () => import("../views/PrincingPlan.vue"),
  },
  {
    path: "/shoppingCartCheckoutForm",
    name: "shoppingCartCheckoutForm",
    component: () => import("../views/ShoppingCartCheckoutForm.vue"),
  },
  {
    path: "/cartCheckout",
    name: "cartCheckout",
    component: () => import("../views/CartCheckout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
