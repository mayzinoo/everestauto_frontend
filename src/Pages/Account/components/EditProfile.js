//Libraries
import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
//Css
import "../components/styles/editprofile.css";
//API
import { EditProfileApi } from "../../../api/Api";
import { setGetUserApi } from "../../../reducers/userActionsStore";

const Editprofile = (props) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  };

  const [userCredential, setUserCredential] = useState(initialValues);

  useEffect(() => {
    setUserCredential(JSON.parse(props.GetUserApi));
  }, [props.GetUserApi]);

  const handleFirstNameChange = (e) => {
    setUserCredential({ ...userCredential, first_name: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setUserCredential({ ...userCredential, phone: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setUserCredential({ ...userCredential, last_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserCredential({ ...userCredential, email: e.target.value });
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    EditProfileApi({ _data: userCredential })
      .then((editProfileData) => {
        console.log("editProfileData>> ", editProfileData);
        if (editProfileData.status === 1) {
          const profile = editProfileData.data;
          console.log("profile>> ", profile);
          //store user information in redux store
          props.dispatch(setGetUserApi(JSON.stringify(profile)));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <div className="main-content">
        <div className="editProfile">
          <p className="sub-title">Edit Profile</p>
          <Container className="editprofile-wrap" fluid>
            <Row>
              <p className="editprofile-sub-title">Personal Settings</p>
              <Col md={6}>
                <div className="inputfield-header">First Name</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.first_name}
                  onChange={handleFirstNameChange}
                  required
                ></input>
                <div className="inputfield-header">Phone Number</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.phone}
                  onChange={handlePhoneChange}
                  required
                ></input>
              </Col>
              <Col md={6}>
                <div className="inputfield-header">Last Name</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.last_name}
                  onChange={handleLastNameChange}
                  required
                ></input>
                <div className="inputfield-header">Email</div>
                <input
                  className="account-Input"
                  type="email"
                  defaultValue={userCredential.email}
                  onChange={handleEmailChange}
                  required
                ></input>
              </Col>
            </Row>
            <div className="break"></div>
            <Row>
              <div className="btnLinks">
                <Button className="edit-btn" href="/account/profile">
                  Back
                </Button>
                <Button
                  className="edit-btn"
                  onClick={(e) => handleEditProfileSubmit(e)}
                >
                  Update
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(Editprofile);
