//libraries
import React, { Fragment, useState } from "react";
//components
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
import Button from "../../../CustomComponents/CButton";
//css
import "./styles/interest.css";

import { BusinessRegisterApi } from "../../../api/Api";

function Interest() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [interest_option, setInterested] = useState("");
  const [qtyofcars, setQtyOfCars] = useState("");
  const [message, setMessage] = useState("");
  const [registerno, setRegisterno] = useState("");
  const [officeno, setOfficeno] = useState("");
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhoneNumber(onlyDigits);
  };

  const checkObjectValid = () => {
    if (
      firstName &&
      companyName &&
      email &&
      phonenumber &&
      registerno &&
      officeno
    ) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleBusinessRegisterSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      BusinessRegisterApi({
        _data: {
          firstName,
          lastName,
          companyName,
          email,
          phonenumber,
          interest_option,
          qtyofcars,
          message,
          registerno,
          officeno,
        },
      })
        .then((businessRegData) => {
          if (businessRegData.status === 1) {
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setEmail("");
            setPhoneNumber("");
            setInterested("");
            setQtyOfCars("");
            setMessage("");
            setRegisterno("");
            setOfficeno("");
            setInvisibleSuccess(true);
            setResponseMessage("Successfully sent your message !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setResponseMessage("");
            }, 2000);
          } else {
            setInvisibleDanger(true);
            setResponseMessage(businessRegData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setResponseMessage("");
            }, 2000);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <div className="interest-container-wrap">
        <h1 className="in-mainheader"> Register Your Interest </h1>
        <p className="in-subheader">
          Register your interest with us and our Everest team will be in touch
          shortly. We'll guide your step-by-step to your next business car.
        </p>
      </div>
      <Container className="interest-container">
        <div className="interest-form-wrap">
          <Form className="interest-form">
            <Row className="mb-6">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  {inputError && !firstName ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {inputError && !email ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                  />
                  {inputError && !companyName ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPnoneNo">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={phonenumber}
                    onChange={(e) => checkInput(e)}
                  />
                  {inputError && !phonenumber ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGridInterested">
                  <Form.Label>Are you primarily interested in:</Form.Label>
                  <Form.Select
                    defaultValue="Select an option"
                    onChange={(event) => setInterested(event.target.value)}
                  >
                    <option>Select an option</option>
                    <option>Corporate Leasing</option>
                    <option>Employee Benefit Program</option>
                    <option>I have a car allowance</option>
                    <option>Multiple of the options above</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridInterested">
                  <Form.Label>How many cars will you need?</Form.Label>
                  <Form.Select
                    defaultValue="Select an option"
                    onChange={(event) => setQtyOfCars(event.target.value)}
                  >
                    <option>Select an option</option>
                    <option>1-2 cars</option>
                    <option>3-5 cars</option>
                    <option>6-10 cars</option>
                    <option>10+ cars</option>
                    <option>20+ cars</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridRegisterno">
                  <Form.Label>Business Registration Number / UEN</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={registerno}
                    onChange={(event) => setRegisterno(event.target.value)}
                  />
                  {inputError && !registerno ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridOfficeno">
                  <Form.Label>Office Number</Form.Label>
                  <Form.Control
                    type="tel"
                    maxLength="11"
                    value={officeno}
                    onChange={(event) => setOfficeno(event.target.value)}
                  />
                  {inputError && !officeno ? (
                    <span className="interest-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label> Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Your Message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Form.Group>
            </Row>
            {invisibleSuccess && (
              <div className="row">
                <div className="col-sm-12">
                  <Alert show={invisibleSuccess} className="success-css">
                    <Alert.Heading>{responseMessage}</Alert.Heading>
                  </Alert>
                </div>
              </div>
            )}
            {invisibleDanger && (
              <div className="row">
                <div className="col-sm-12">
                  <Alert show={invisibleDanger} className="danger-css">
                    <Alert.Heading>{responseMessage}</Alert.Heading>
                  </Alert>
                </div>
              </div>
            )}
            <div className="interest-formSubmitBtn-wrap">
              <Button
                type={0}
                text="Message Us"
                style={{ width: "100%", textAlign: "center" }}
                onClick={(e) => {
                  handleBusinessRegisterSubmit(e);
                }}
              />
            </div>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}

export default Interest;
