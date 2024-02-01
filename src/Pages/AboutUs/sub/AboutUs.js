//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import carImage from "../../../assets/images/aboutus.png";
import howitworksImage from "../../../assets/images/business2.png";
import Paragraph from "../components/Paragraph";
import Space from "../components/Space";
import ItemBoxes from "../components/ItemBoxes";

//css
import "../components/styles/aboutUs.css";

function AboutUs(props) {
  return (
    <Fragment>
      <Header />
      <SubHeader subtitle="Find out more about Everest" />
      <Container className="image-container">
        <img src={carImage} alt="" className="car-image" />
        <p className="para-text">
          Everest's mission is to offer all the benefits of car ownership, but
          none of the hassle.
        </p>
      </Container>
      <Paragraph />
      <Space />
      <Container className="image-container">
        <img src={howitworksImage} alt="" className="car-image2" />
      </Container>
      <Container className="mini-container">
        <p className="para-text">
          How does it work? Simple. It’s a fully digital service. Subscribe
          online in 3 minutes and we’ll deliver the car to your doorstep within
          typically 24 hours.
          <br />
          <br />
          Everest was founded here in Singapore by two automotive enthusiasts
          and veterans with over 25 years of industry experience from Grab, Uber
          and Hertz.
          <br />
          <br />
          Our goal is to enable everyone to get their ideal car and allow them
          to easily switch cars as their lifestyle changes over time. Just add
          fuel and enjoy your drive!
          <br />
          <br />
          <span className="" style={{ color: "#E8C136", fontSize: "23px", marginRight: "5px" }}>
            Own an experience
          </span>
          not a car.
        </p>
      </Container>
      <Container className="header-container2">
        <h2 className="sub-header2">Find Your Ideal Everest Auto Car</h2>
      </Container>
      <ItemBoxes />
    </Fragment>
  );
}

export default AboutUs;
