//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
import Button from "../../../CustomComponents/CButton";
//css
import "./styles/advertisement.css";

function Advertisement(props) {
  return (
    <Fragment>
      <div className="home-container-wrap">
        <Container className="ad-container">
          <div className="ad-header-wrap">
            <img
              className="ad-hide-Image"
              src="https://st.depositphotos.com/2528559/2859/i/600/depositphotos_28592441-stock-photo-blue-car-front-view.jpg"
              alt=""
            />
            <h1 className="ad-mainHeader text-4xl">
              Search. Subscribe. Drive.
            </h1>
            <h2 className="ad-subHeader text-lg">
              Random is the new way to get your own car without buying or
              leasing. Subscribe in less than 3 minutes, fully flexible and 100%
              digital experience.
            </h2>
            <Button type={1} text="Find Vehicles" href="/vehicles/All" />
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Advertisement;
