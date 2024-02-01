//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Business from "./sub/Business";
//css
import "./components/styles/index.css";

function BusinessIndex(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/business`} component={Business} />
      </Switch>
    </Fragment>
  );
}

export default BusinessIndex;
