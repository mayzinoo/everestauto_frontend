//libraries
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
//components
import { Container } from "react-bootstrap";
import Button from "../CustomComponents/CButton";
//css
import "./styles/index.css";
//API
import { ForgetConfirmPasswordApi } from "../api/Api";

function ForgotConPwd() {
  const { id } = useParams();
  const user_id = id;

  const initialValues = {
    id: "",
    password: "",
    cPassword: "",
  };
  const [userCredential, setUserCredential] = useState(initialValues);
  const [inputError, setInputError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (e) => {
    setUserCredential({ ...userCredential, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setUserCredential({ ...userCredential, cPassword: e.target.value });
  };

  $("#cPassword").on("keyup", function () {
    if (userCredential.password !== userCredential.cPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  });

  const checkObjectValid = () => {
    if (userCredential.password && userCredential.cPassword) {
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
      ForgetConfirmPasswordApi({
        _data: { id, user_id, password: userCredential.password },
      })
        .then((forgetconfirmData) => {
          if (forgetconfirmData.status === 1) {
            window.location.href = "/login";
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <Container className="preEmpt-container">
        <div className="preEmpt-form-wrap">
          <h1 className="pE-title">Forgot your Password?</h1>
          <form
            className="preEmpt-form"
            onSubmit={(e) => handleRegisterSubmit(e)}
          >
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
                onChange={handlePasswordChange}
              />
              <label htmlFor="password" className="preEmpt-form-input-label">
                <i className="fas fa-key"></i>Password
              </label>
            </div>

            <div className="preEmpt-inputfield-wrap">
              {inputError && !userCredential.cPassword ? (
                <span className="preEmpt-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              {passwordError &&
              userCredential.cPassword !== userCredential.password ? (
                <span className="preEmpt-error-msg">
                  Password does not match !
                </span>
              ) : (
                <></>
              )}
              <input
                id="cPassword"
                className={`preEmpt-form-input ${
                  (passwordError || inputError) &&
                  userCredential.password !== userCredential.cPassword
                    ? "error"
                    : ""
                }`}
                type="password"
                value={userCredential.cPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label htmlFor="cPassword" className="preEmpt-form-input-label">
                <i className="fas fa-key"></i>Confirm Password
              </label>
            </div>

            <div className="preEmpt-formSubmitBtn-wrap">
              <Button
                type={0}
                text="Submit"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <label className="preEmpt-registerlink-label">
                Go back to{" "}
                <a className="preEmpt-registerlink" href="/login">
                  Login
                </a>
              </label>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

export default ForgotConPwd;
