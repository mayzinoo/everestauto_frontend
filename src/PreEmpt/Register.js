//libraries
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import $ from "jquery";
//components
import { Container, Row, Col, Alert } from "react-bootstrap";
import Button from "../CustomComponents/CButton";
//API
import { RegisterApi } from "../api/Api";
import { setLogin, setGetUserApi } from "../reducers/userActionsStore";
//css
import "./styles/register.css";

function Register(props) {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phNumber: "",
    password: "",
    cfmPassword: "",
  };
  const [userCredential, setUserCredential] = useState(initialValues);
  const [inputError, setInputError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserCredential({ ...userCredential, [id]: value });
  };

  $("#cfmPassword").on("keyup", function () {
    if (userCredential.password !== userCredential.cfmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  });

  const checkObjectValid = () => {
    if (
      userCredential.first_name &&
      userCredential.last_name &&
      userCredential.email &&
      userCredential.phNumber &&
      userCredential.password &&
      userCredential.cfmPassword
    ) {
      if (!passwordError) {
        setInputError(false);
        return true;
      }
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      RegisterApi({ _data: userCredential })
        .then((registerData) => {
          if (registerData.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Register Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 2000);
            props.dispatch(setLogin(true));
            const profile = registerData.data;
            props.dispatch(setGetUserApi(JSON.stringify(profile)));
            if (
              profile !== "" &&
              profile !== undefined &&
              profile !== null &&
              profile !== []
            ) {
              window.location.href = "/";
            }
          } else {
            setInvisibleDanger(true);
            setMessage(registerData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
            }, 2000);
          }
        })
        .catch((error) => {
          setInvisibleDanger(true);
          setMessage("Register Fail!");
          setTimeout(() => {
            // 2 seconds later which is closing
            setInvisibleDanger(false);
            setMessage("");
          }, 2000);
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <Container className="register-container">
        <div className="register-form-wrap">
          <h1 className="pE-title">Register</h1>
          <form
            className="register-form"
            onSubmit={(e) => handleRegisterSubmit(e)}
          >
            <Row className="mb-6">
              <Col md={6}>
                <div className="register-inputfield-wrap">
                  {inputError && !userCredential.first_name ? (
                    <span className="register-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                  <input
                    id="first_name"
                    className={`register-form-input ${
                      inputError && !userCredential.first_name ? "error" : ""
                    }`}
                    type="text"
                    value={userCredential.first_name}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="first_name"
                    className="register-form-input-label"
                  >
                    <i className="fas fa-user"></i>First Name
                  </label>
                </div>
              </Col>
              <Col md={6}>
                <div className="register-inputfield-wrap">
                  {inputError && !userCredential.last_name ? (
                    <span className="register-error-msg">
                      This field is required !
                    </span>
                  ) : (
                    <></>
                  )}
                  <input
                    id="last_name"
                    className={`register-form-input ${
                      inputError && !userCredential.last_name ? "error" : ""
                    }`}
                    type="text"
                    value={userCredential.userlast_namename}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="last_name"
                    className="register-form-input-label"
                  >
                    <i className="fas fa-user"></i>Last Name
                  </label>
                </div>
              </Col>
            </Row>

            <div className="register-inputfield-wrap">
              {inputError && !userCredential.email ? (
                <span className="register-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="email"
                className={`register-form-input ${
                  inputError && !userCredential.email ? "error" : ""
                }`}
                type="email"
                value={userCredential.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="register-form-input-label">
                <i className="fas fa-envelope"></i>Email
              </label>
            </div>

            <div className="register-inputfield-wrap">
              {inputError && !userCredential.phNumber ? (
                <span className="register-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="phNumber"
                className={`register-form-input ${
                  inputError && !userCredential.phNumber ? "error" : ""
                }`}
                type="number"
                value={userCredential.phNumber}
                onChange={handleInputChange}
              />
              <label htmlFor="phNumber" className="register-form-input-label">
                <i className="fas fa-phone"></i>Phone Number
              </label>
            </div>

            <div className="register-inputfield-wrap">
              {inputError && !userCredential.password ? (
                <span className="register-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="password"
                className={`register-form-input ${
                  inputError && !userCredential.password ? "error" : ""
                }`}
                type="password"
                value={userCredential.password}
                onChange={handleInputChange}
              />
              <label htmlFor="password" className="register-form-input-label">
                <i className="fas fa-key"></i>Password
              </label>
            </div>

            <div className="register-inputfield-wrap">
              {inputError && !userCredential.cfmPassword ? (
                <span className="register-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              {passwordError &&
              userCredential.cfmPassword !== userCredential.password ? (
                <span className="register-error-msg">
                  Password does not match !
                </span>
              ) : (
                <></>
              )}
              <input
                id="cfmPassword"
                className={`register-form-input ${
                  (passwordError || inputError) &&
                  userCredential.password !== userCredential.cfmPassword
                    ? "error"
                    : ""
                }`}
                type="password"
                value={userCredential.cfmPassword}
                onChange={handleInputChange}
              />
              <label
                htmlFor="cfmPassword"
                className="register-form-input-label"
              >
                <i className="fas fa-key"></i>Confirm Password
              </label>
            </div>
            {invisibleSuccess && (
              <div className="row">
                <div className="col-sm-12">
                  <Alert show={invisibleSuccess} className="success-css">
                    <Alert.Heading>{message}</Alert.Heading>
                  </Alert>
                </div>
              </div>
            )}
            {invisibleDanger && (
              <div className="row">
                <div className="col-sm-12">
                  <Alert show={invisibleDanger} className="danger-css">
                    <Alert.Heading>{message}</Alert.Heading>
                  </Alert>
                </div>
              </div>
            )}
            <div className="register-formSubmitBtn-wrap">
              <Button
                type={0}
                text="Register"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <label className="register-registerlink-label">
                Already a Member?{" "}
                <a className="register-registerlink" href="/login">
                  Login here
                </a>
              </label>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

const mapStatetoProps = (state) => ({});
export default connect(mapStatetoProps)(Register);
