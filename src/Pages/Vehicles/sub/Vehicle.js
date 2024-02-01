//libraries
import React, { Fragment } from "react";
//components
import VehicleList from "../components/VehicleList";
import UserGuide from "../../Home/components/UserGuide";

//css
import "../components/styles/vehicle.css";

function Vehicle() {
  return (
    <Fragment>
      <VehicleList />
      <UserGuide />
    </Fragment>
  );
}

export default Vehicle;
