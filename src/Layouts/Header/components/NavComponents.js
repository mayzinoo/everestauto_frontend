//libraries
import React, { Fragment } from "react";
import $ from "jquery";
import { connect } from "react-redux";
//components
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { setLogout, setLogin } from "../../../reducers/userActionsStore";
import FindVehicles from "./FindVehicles";
import { useTranslation } from "react-i18next";
//css
import "../components/styles/navcomponents.css";

function NavComponents(props) {
  const isLoggined = props.getLogin;
  const { t } = useTranslation();
  //const language = localStorage.getItem("lng");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar").addClass("navbar-scroll");
    } else {
      $(".navbar").removeClass("navbar-scroll");
    }
  });

  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(setLogin(false));
    props.dispatch(setLogout());
    window.location.assign("/login");
  };

  return (
    <Fragment>
      <Navbar fixed="top" id="navbar" collapseOnSelect expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <div className="company-logo"></div>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <FindVehicles />
              <NavLink className="nav-link" to="/business">
                {t("For Business")}
              </NavLink>

              <NavLink className="nav-link" to="/faq">
                {t("FAQ")}
              </NavLink>

              {/* <Languageswitch />
               */}
              {isLoggined ? (
                <NavDropdown
                  title={
                    <i className="fas fa-user" style={{ color: "#E8C136" }}>
                      <span className="navToggleBtn-name">My Account</span>
                    </i>
                  }
                  id="nav-dropdown-autoclose-true"
                >
                  <NavDropdown.Item eventKey="4.2" href="/account/profile">
                    <i
                      className="fas fa-address-card"
                      style={{ color: "#E8C136" }}
                    ></i>
                    <span className="profile-css-span"> {t("Profile")} </span>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="4.3" href="/account/booking">
                    <i
                      className="fas fa-sliders-h"
                      style={{ color: "#E8C136" }}
                    ></i>
                    <span className="profile-css-span">{t("Dashbord")}</span>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    eventKey="4.4"
                    onClick={(e) => handleLogout(e)}
                  >
                    <i
                      className="fas fa-sign-out-alt"
                      style={{ color: "#dc3545" }}
                    ></i>
                    <span className="profile-css-span"> {t("Log Out")} </span>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink className="nav-link" to="/login">
                  {t("Log In")}
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

const mapStatetoProps = (state) => ({
  getLogin: state.UserActions.GetLogin,
});

export default connect(mapStatetoProps)(NavComponents);
