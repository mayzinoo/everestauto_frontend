//libraries
import React, { Fragment, useState } from "react";
//components
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
//css
import "../components/styles/findvehicles.css";

function FindVehicles() {
  const { t } = useTranslation();
  const [key, setActiveKey] = useState("Popular");
  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Fragment>
      <NavDropdown
        title={<span className="navToggleBtn-name">{t("Find Vehicles")}</span>}
        id="nav-dropdown-autoclose-true"
        onSelect={handleSelect}
      >
        <NavDropdown.Item eventKey="All" href={`/vehicles/${key}`}>
          <span className="css-span"> {t("All Vehicles")} </span>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Popular" href={`/vehicles/${key}`}>
          <span className="css-span"> {t("Popular")} </span>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Offers" href={`/vehicles/${key}`}>
          <span className="css-span"> {t("Offers")} </span>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Brand New" href={`/vehicles/${key}`}>
          <span className="css-span"> {t("Brand New")} </span>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Electric" href={`/vehicles/${key}`}>
          <span className="css-span"> {t("Electric")} </span>
        </NavDropdown.Item>
      </NavDropdown>
    </Fragment>
  );
}

export default FindVehicles;
