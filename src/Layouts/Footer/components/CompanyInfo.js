//libraries
import React, { Fragment } from "react";
//components
import { Row, Col } from "react-bootstrap";
//css
import "./styles/companyinfo.css";

function CompanyInfo(props) {
  return (
    <Fragment>
      <div className="footer-company-info-wrap">
        <Row className="footer-ci-row">
          <Col md={4} className="footer-ci-col">
            <h1 className="footer-ci-col-title">Contact Info</h1>
            <p className="footer-ci-col-desc">
              <span>
                <i className="fas fa-building" />
                Everest Auto Pte. Ltd.
              </span>
              <span>
                <i className="fas fa-map-marked" />
                109 Kaki Bukit Ave 1,
                <br /> #01-00 Shun Li Industrial Park,
                <br /> Singapore 415989
              </span>
              <span>
                <i className="fas fa-phone" />
                +65 8113 4548
              </span>
              <span>
                <i className="fas fa-envelope" />
                owen.everestauto@gmail.com
              </span>
            </p>
          </Col>
          <Col md={4} className="footer-ci-col">
            <h1 className="footer-ci-col-title">Our Company</h1>
            <div className="footer-ci-col-link-wrap">
              <a className="footer-ci-col-link" href="/aboutus">
                About Us
              </a>
              <a className="footer-ci-col-link" href="/terms">
                Terms &#38; Conditions
              </a>
              <a className="footer-ci-col-link" href="/privacypolicy">
                Privacy Policy
              </a>
            </div>
          </Col>
          <Col md={4} className="footer-ci-col">
            <h1 className="footer-ci-col-title">Open Hours</h1>
            <h4 className="footer-ci-col-subtitle">Service Department</h4>
            <p className="footer-ci-col-desc" style={{ margin: "15px 0px" }}>
              Mon-Sat : 9:00am - 6:30pm <br />
              Closed on Sunday and Public Holidays
            </p>
            <h4 className="footer-ci-col-subtitle">Sales Department</h4>
            <p className="footer-ci-col-desc" style={{ margin: "15px 0px" }}>
              Mon-Sat : 9:00am - 6:30pm <br />
              Closed on Sunday and Public Holidays
            </p>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default CompanyInfo;
