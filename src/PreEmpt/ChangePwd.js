//libraries
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import $ from "jquery";
//components
import { Container, Alert } from "react-bootstrap";
import Button from "../CustomComponents/CButton";
//css
import "./styles/changepwd.css";
//API
import { ChangePasswordApi } from "../api/Api";

function ChangePwd(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cPassword, setConfirmPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ id: "" });
  const [inputError, setInputError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));
  }, [props.GetUserApi]);

  $("#cPassword").on("keyup", function () {
    if (newPassword !== cPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  });

  const checkObjectValid = () => {
    if (oldPassword && newPassword && cPassword) {
      if (!passwordError) {
        setInputError(false);
        return true;
      }
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleChangeSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      ChangePasswordApi({
        _data: {
          id: userDetails.id,
          password: oldPassword,
          newpassword: newPassword,
        },
      })
        .then((changePasswordData) => {
          console.log("changePasswordData>> ", changePasswordData);
          if (changePasswordData.status === 1) {
            setInvisibleSuccess(true);
            setMessage("Change Password Successful !");
            setTimeout(() => {
              // 2 seconds later which is closing
              setInvisibleSuccess(false);
              setMessage("");
            }, 2000);
            window.location.href = "/login";
          } else {
            setInvisibleDanger(true);
            setMessage(changePasswordData.message);
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
      <Container className="changePwd-container">
        <div className="changePwd-form-wrap" style={{ width: "fit-content" }}>
          <h1 className="pW-title">Update your Password?</h1>
          <form
            className="changePwd-form"
            onSubmit={(e) => handleChangeSubmit(e)}
          >
            <div className="changePwd-inputfield-wrap">
              {inputError && !oldPassword ? (
                <span className="changePwd-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="oldPassword"
                name="oldPassword"
                className={`changePwd-form-input ${
                  inputError && !oldPassword ? "error" : ""
                }`}
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label
                htmlFor="oldPassword"
                className="changePwd-form-input-label"
              >
                <i className="fas fa-key"></i>Old Password
              </label>
            </div>

            <div className="changePwd-inputfield-wrap">
              {inputError && !newPassword ? (
                <span className="changePwd-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              <input
                id="newPassword"
                className={`changePwd-form-input ${
                  inputError && !newPassword ? "error" : ""
                }`}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label
                htmlFor="newPassword"
                className="changePwd-form-input-label"
              >
                <i className="fas fa-key"></i>New Password
              </label>
            </div>

            <div className="changePwd-inputfield-wrap">
              {inputError && !cPassword ? (
                <span className="changePwd-error-msg">
                  This field is required !
                </span>
              ) : (
                <></>
              )}
              {passwordError && cPassword !== newPassword ? (
                <span className="changePwd-error-msg">
                  Password does not match !
                </span>
              ) : (
                <></>
              )}
              <input
                id="cPassword"
                className={`changePwd-form-input ${
                  (passwordError || inputError) && newPassword !== cPassword
                    ? "error"
                    : ""
                }`}
                type="password"
                value={cPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="cPassword" className="changePwd-form-input-label">
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
            <div
              className="changePwd-formSubmitBtn-wrap"
              style={{ marginBottom: "0px" }}
            >
              <Button
                type={0}
                text="Change Password"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(ChangePwd);
