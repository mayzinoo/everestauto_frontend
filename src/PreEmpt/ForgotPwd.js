//libraries
import React, { Fragment, useState } from "react";
//components
import { Container, Alert } from "react-bootstrap";
import Button from "../CustomComponents/CButton";
//css
import "./styles/index.css";
//API
import { ForgetPasswordApi } from "../api/Api";

function ForgotConPwd(props) {
  const initialValues = {
    email: "",
  };
  const [userCredential, setUserCredential] = useState(initialValues);
  const [inputError, setInputError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setUserCredential({ ...userCredential, email: e.target.value });
  };

  const checkObjectValid = () => {
    if (userCredential.email) {
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
      ForgetPasswordApi({ _data: userCredential })
        .then((forgetData) => {
          console.log("forgetData>> ", forgetData);
          if (forgetData.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Forgot Password Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 2000);
            window.location.href = `/forgotconfirmpassword/${forgetData.data}`;
          } else {
            setInvisibleDanger(true);
            setMessage(forgetData.message);
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleDanger(false);
              setMessage("");
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
      <Container className="preEmpt-container">
        <div className="preEmpt-form-wrap">
          <h1 className="pE-title">Forget Password</h1>
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
                text="Forget Password"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

export default ForgotConPwd;
