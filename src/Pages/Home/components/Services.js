//libraries
import React, { Fragment } from "react";
//components
import { Row, Col, Container } from "react-bootstrap";
//css
import "./styles/services.css";
import Insurance from "../../../assets/homePageIcons/Insurance.png";
import maintenance from "../../../assets/homePageIcons/maintenance.png";
import nodeposit from "../../../assets/homePageIcons/nodeposit.webp";
import flexible from "../../../assets/homePageIcons/flexible.webp";
import support from "../../../assets/homePageIcons/support.png";
import rightCar from "../../../assets/homePageIcons/rightCar.jpg";

function Services(props) {
  return (
    <Fragment>
      <div className="home-container-wrap" style={{ paddingTop: "40px" }}>
        <Container className="sr-container">
          <h1 className="sr-mainheader text-4xl">Included in every car:</h1>
          <p className="sr-subscription">
            Subscribe from&nbsp;<strong>1 to 24 months</strong>&nbsp;and pay
            only one flat monthly fee.
          </p>
          <Row className="sr-listItemGroup-wrap">
            <Col md={4}>
              <div className="sr-listItem">
                <img className="sr-listItemLogo" src={Insurance} alt="" />
                <p className="sr-listItemName">Insurance</p>
                <p className="sr-listItemDesc">
                  In exchange for your paying a premium, the insurance company
                  agrees to pay your losses as outlined in your policy.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="sr-listItem">
                <img className="sr-listItemLogo" src={maintenance} alt="" />
                <p className="sr-listItemName">Maintenance & Servicing</p>
                <p className="sr-listItemDesc">
                  Vehicle Maintenance means service, repair, or maintenance of
                  any type of motor vehicle, including but not limited to:
                  vehicle and equipment rehabilitation and mechanical repairs.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="sr-listItem">
                <img className="sr-listItemLogo" src={flexible} alt="" />
                <p className="sr-listItemName">Flexible Usage and Pricing</p>
                <p className="sr-listItemDesc">
                  Any pricing strategy that tries to split value creation
                  somewhat evenly between a firm and its customers. This is in
                  contrast to raising prices as high as consumers will pay.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="sr-listItem">
                <img className="sr-listItemLogo" src={support} alt="" />
                <p className="sr-listItemName">24/7 Support Portal</p>
                <p className="sr-listItemDesc">
                  Customers can get help and find answers to questions as soon
                  as they come up—24/7 and in real-time. Companies often offer
                  24/7 support through chatbots.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="sr-listItem">
                <img className="sr-listItemLogo" src={rightCar} alt="" />
                <p className="sr-listItemName">Choice of Right Vehicles</p>
                <p className="sr-listItemDesc">
                  Put a positive spin on things to take some pressure off your
                  decision: Rather than being stuck, you are lucky to have 2
                  good choices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="sr-listItem">
                <img
                  className="sr-listItemLogo"
                  src={nodeposit}
                  width="90px"
                  height="90px"
                  alt=""
                />
                <p className="sr-listItemName">No deposit or Down payment</p>
                <p className="sr-listItemDesc">
                  The down payment represents a portion of the total purchase
                  price, and the buyer will often take out a loan to finance the
                  remainder.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="home-container-wrap"
        style={{ padding: "25px 32px 40px 32px" }}
      >
        <Container className="sr-container">
          <h1 className="sr-ad-mainheader text-4xl">
            Why&nbsp;<span style={{ color: "#E8C136" }}>Everest Auto</span>?
          </h1>
          <Row className="sr-row-wrap">
            <Col md={4} className="sr-ad-icons-col">
              <i className="fas fa-arrows-alt"></i>
              <h3>Flexible</h3>
              <p>Subscribe 1-24 months.</p>
            </Col>
            <Col md={4} className="sr-ad-icons-col">
              <i className="fas fa-tasks"></i>
              <h3>Simple</h3>
              <p>Subscribe online and doorstep delivery.</p>
            </Col>
            <Col md={4} className="sr-ad-icons-col">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Affordable</h3>
              <p>All prices are NETT and no hidden charges.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Services;
