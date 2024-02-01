//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";

//css
import "./styles/paragraph.css";

function Paragraph(props) {

  return (
    <Fragment>
      <Container className="paragraph-container">
        <div className="paragraph-div">
          <p className="paragraph">
            Everest was founded here in Singapore by two automotive enthusiasts and veterans with over 25 years of industry experience from Grab, Uber and Hertz. Everest's mission to offer all the benefits of car ownership, but none of the hassle.
          </p>
          <p className="paragraph">
            Our Everest team is always ready to assist you in selecting the right car model and subscription period and answer any questions that might arise during the subscription period.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}

export default Paragraph;
