//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Vehicle from "./sub/Vehicle";
import PageNotFound from "../404/index";
//css
import "./components/styles/index.css";

function VehicleIndex(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/vehicles`} component={Vehicle} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default VehicleIndex;
