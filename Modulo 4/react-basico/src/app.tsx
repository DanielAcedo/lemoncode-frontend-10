import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListPage } from "./views/list";
import { DetailPage } from "./views/detail";
import CssBaseline from "@mui/material/CssBaseline";
import ActorListPage from "./views/actor-list";
import CustomAppbar from "./components/appBar";
import {
  actorDetailRoute,
  actorListRoute,
  homeRoute,
  organisationListRoute,
  organisationUserDetailsRoute,
} from "./routes";
import ActorDetailPage from "./views/actor-detail";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <CustomAppbar></CustomAppbar>

        <Switch>
          <Route exact path={homeRoute.path}>
            <ListPage />
          </Route>
          <Route path={organisationListRoute.path}>
            <ListPage />
          </Route>
          <Route path={organisationUserDetailsRoute.path}>
            <DetailPage />
          </Route>
          <Route path={actorListRoute.path}>
            <ActorListPage />
          </Route>
          <Route path={actorDetailRoute.path}>
            <ActorDetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
