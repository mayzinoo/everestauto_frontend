//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Policy from "./sub/Policy";
//css

function PrivacyPolicy() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/privacypolicy`} component={Policy} />
      </Switch>
    </Fragment>
  );
}

export default PrivacyPolicy;
