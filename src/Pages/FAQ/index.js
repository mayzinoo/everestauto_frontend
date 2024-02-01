//libraries
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Faq from "./sub/Faq";
//css
import "./components/styles/faq.css";

function FaqIndex(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/faq`} component={Faq} />
      </Switch>
    </Fragment>
  );
}

export default FaqIndex;
