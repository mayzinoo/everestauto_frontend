//libraries
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
//components
import { Container, Alert } from "react-bootstrap";
import Button from "../CustomComponents/CButton";

import { LoginApi } from "../api/Api";
//css
import "./styles/index.css";
import { setLogin, setGetUserApi } from "../reducers/userActionsStore";

function Login(props) {
  const initialValues = {
    email: "",
    password: "",
  };
  const [userCredential, setUserCredential] = useState(initialValues);
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserCredential({ ...userCredential, [id]: value });
  };

  const checkObjectValid = () => {
    if (userCredential.email && userCredential.password) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      LoginApi({ _data: userCredential })
        .then((logRes) => {
          if (logRes.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Login Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 2000);
            props.dispatch(setLogin(true));
            const profile = logRes.data;
            console.log("profile>> ", profile);
            //store user information in redux store
            props.dispatch(setGetUserApi(JSON.stringify(profile)));
            window.location.href = "/";
          } else {
            setInvisibleDanger(true);
            setMessage(logRes.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
            }, 2000);
            props.dispatch(setLogin(false));
          }
        })
        .catch((error) => {
          setInvisibleDanger(true);
          setMessage("Login Fail!");
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <Container className="preEmpt-container">
        <div className="preEmpt-form-wrap">
          <h1 className="pE-title">Login</h1>
          <form className="preEmpt-form" onSubmit={(e) => handleLoginSubmit(e)}>
            <div className="preEmpt-inputfield-wrap">
              {inputError && !userCredential.email ? (
                <span className="preEmpt-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="email"
                className={`preEmpt-form-input ${
                  inputError && !userCredential.email ? "error" : ""
                }`}
                type="email"
                value={userCredential.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="preEmpt-form-input-label">
                <i className="fas fa-user"></i>Email
              </label>
            </div>
            <div className="preEmpt-inputfield-wrap">
              {inputError && !userCredential.password ? (
                <span className="preEmpt-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="password"
                className={`preEmpt-form-input ${
                  inputError && !userCredential.password ? "error" : ""
                }`}
                type="password"
                value={userCredential.password}
                onChange={handleInputChange}
              />
              <label htmlFor="password" className="preEmpt-form-input-label">
                <i className="fas fa-key"></i>Password
              </label>
            </div>
            <div
              className="preEmpt-inputfield-wrap"
              style={{ marginBottom: "35px" }}
            >
              <a
                className="preEmpt-form-input-label forgot"
                style={{ marginBottom: "0px" }}
                href="/forgotpassword"
              >
                Forgot Password?
              </a>
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
            <div className="preEmpt-formSubmitBtn-wrap">
              <Button
                type={0}
                text="Log In"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <label className="preEmpt-registerlink-label">
                Not a Member?{" "}
                <a className="preEmpt-registerlink" href="/register">
                  Register
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

export default connect(mapStatetoProps)(Login);
