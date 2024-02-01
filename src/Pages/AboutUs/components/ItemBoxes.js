//libraries
import React, { Fragment } from "react";
//components
import carImage from "../../../assets/images/aboutus2.png";
import whatsappImage from "../../../assets/images/whatsapp2.png";
import Button from "../../../CustomComponents/CButton";

//css
import "./styles/itemboxes.css";

function ItemBoxes(props) {
  return (
    <Fragment>
      <div className="row box-container">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box-div">
            <img src={carImage} alt="" className="item-image" />
            <div className="side-div">
              <p className="box-text">
                More than <span style={{ color: "#E8C136" }}>140 Car Models</span>{" "}
                to choose from.
              </p>
              <div className="box-button">
                <Button type={1} text="See More Cars" href="/vehicles/All" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box-div">
            <img src={whatsappImage} alt="" className="item-image" />
            <div className="side-div">
              <p className="box-text">
                Message Us On <span style={{ color: "#18953e" }}>WhatsApp</span>
              </p>
              <div className="box-button">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B6581736535&text=I'm%20interested%20in%20your%20car&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type={1} text="Message Us" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ItemBoxes;
