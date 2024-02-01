//libraries
import React, { Fragment } from "react";
//components
import Button from "../../../CustomComponents/CButton";
//css
import "./styles/footerad.css";

function FooterAd(props) {
  return (
    <Fragment>
      <div className="footer-ad-wrap">
        <h1 className="footer-ad-desc">
          Ready to find<strong>&nbsp;next car ?</strong>
        </h1>
        <div className="footer-ad-btn-wrap">
          <Button type={1} text="Find Vehicles" href="/vehicles/All"></Button>
        </div>
      </div>
    </Fragment>
  );
}

export default FooterAd;
