import React from "react";
import Appbar from "@mui/material/AppBar";
import { Button, Toolbar, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import {
  homeRoute,
  organisationListRoute,
  organisationUserDetailsRoute,
  actorListRoute,
  actorDetailRoute,
} from "../routes";

function CustomAppbar() {
  const history = useHistory();
  const location = useLocation();

  const getTitle = () => {
    const matchPath = (route) => route.match(location.pathname);

    if (matchPath(homeRoute)) return "Home";
    else if (matchPath(organisationListRoute))
      return "Organisation member list";
    else if (matchPath(organisationUserDetailsRoute))
      return "Organisation member details";
    else if (matchPath(actorListRoute)) return "Actor list";
    else if (matchPath(actorDetailRoute)) return "Actor detail";
  };

  return (
    <Appbar position="static">
      <Toolbar>
        <Typography flexGrow={1}>{getTitle()}</Typography>
        <Button onClick={() => history.push("/list")} color="inherit">
          Organisation list
        </Button>
        <Button onClick={() => history.push("/actor-list")} color="inherit">
          Actor list
        </Button>
      </Toolbar>
    </Appbar>
  );
}

export default CustomAppbar;
