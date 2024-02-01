//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Home from "./sub/Home";
import PageNotFound from "../404/index";
//css
import "./components/styles/index.css";

function HomeIndex(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/home`} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default HomeIndex;
