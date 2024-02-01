//libraries
import React, { Fragment } from "react";
//components
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
//image
import languageSG from "../../../assets/images/language_sg.png";
import languageCH from "../../../assets/images/language_ch.png";
//css
import "../components/styles/languageswitch.css";

function Languageswitch() {
  const { i18n, t } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <Fragment>
      {/*      <NavDropdown
        title={<img className="languageImg-header" src={languageSG} alt="" />}
        id="nav-dropdown-autoclose-true"
      > */}
      <NavDropdown
        title={<span className="navToggleBtn-name"> {t("Language")}</span>}
        id="nav-dropdown-autoclose-true"
      >
        <NavDropdown.Item
          eventKey="4.2"
          href="/"
          onClick={() => handleChangeLng("en")}
        >
          <img className="languageImg" src={languageSG} alt="" />
          &nbsp;
          <span style={{ marginLeft: "8px" }}> {t("English")} </span>
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey="4.3"
          href="/"
          onClick={() => handleChangeLng("chi")}
        >
          <img className="languageImg" src={languageCH} alt="" />
          &nbsp;
          <span style={{ marginLeft: "8px" }}> {t("Chinese")} </span>
        </NavDropdown.Item>
      </NavDropdown>
    </Fragment>
  );
}

export default Languageswitch;
