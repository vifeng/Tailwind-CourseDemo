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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
