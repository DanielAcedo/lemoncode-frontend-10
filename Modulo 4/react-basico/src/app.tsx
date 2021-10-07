import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./views/login";
import { ListPage } from "./views/list";
import { DetailPage } from "./views/detail";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/toolbar";
import Typography from "@mui/material/Typography";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Appbar position="static">
        <Toolbar>
          <Typography>Organisation member list</Typography>
        </Toolbar>
      </Appbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
