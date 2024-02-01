//libraries
import React, { Fragment } from "react";
//components
import { Button } from "react-bootstrap";

//css
import "./styles/businesscar.css";

function Businesscar() {
  return (
    <Fragment>
      <div className="businesscar-container-wrap">
        <div>
          <h1 className="bc-mainheader">Your Company Cars Made Easy</h1>
          <p className="bc-subheader">
            Your all-inclusive company car subscription. Subscribe 1-24 months.
          </p>
          <div className="bc-btn">
            <Button className="btn-css" href="/vehicles/All">
              Find My Business Cars
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Businesscar;
