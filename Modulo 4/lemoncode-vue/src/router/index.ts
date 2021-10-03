import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { homeRoute, memberDetailsRoute } from "./routes";

const routes: Array<RouteRecordRaw> = [homeRoute, memberDetailsRoute];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
