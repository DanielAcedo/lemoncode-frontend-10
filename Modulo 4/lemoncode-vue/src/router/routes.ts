import { Details, Home } from "@/views";
import { RouteParamsRaw } from "vue-router";

export const homeRoute = {
  path: "/",
  name: "Home",
  component: Home,
};

export const memberDetailsRoute = {
  path: "/member/:name",
  name: "MemberDetails",
  component: Details,
  buildParams: (name: string): RouteParamsRaw => ({ name }),
};
