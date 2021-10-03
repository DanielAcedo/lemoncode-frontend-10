import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, Details } from "../views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/member/:name",
    name: "MemberDetails",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
