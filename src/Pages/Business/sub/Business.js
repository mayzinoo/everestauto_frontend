//libraries
import React, { Fragment } from "react";

//components
import Businesscar from "../components/Businesscar";
import Services from "../components/Services";
import Subscription from "../components/Subscription";
import Interest from "../components/Interest";
import About from "../components/About";
import Corporate from "../components/Corporate";

//css
import "../components/styles/business.css";

function Business(props) {
  return (
    <Fragment>
      <Businesscar />
      <Services />
      <Subscription />
      <Interest />
      <About />
      <Corporate />
    </Fragment>
  );
}

export default Business;
