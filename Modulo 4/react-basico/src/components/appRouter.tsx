import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function AppRouter(props) {
  return <Router>{props.children}</Router>;
}

export default AppRouter;
