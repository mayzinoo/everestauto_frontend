//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Terms from "./sub/Terms";
//css

function TremsOfUse() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/terms`} component={Terms} />
      </Switch>
    </Fragment>
  );
}

export default TremsOfUse;
