//libraries
import React, { Fragment, useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//components
import CButton from "../../../CustomComponents/CButton";
import Popular from "./Popular";
import Offers from "./Offers";
import BrandNew from "./BrandNew";
import Electric from "./Electric";
//css
import "./styles/carshowroom.css";
import { VehicleCategoryApi } from "../../../api/Api";

function Carshowroom(props) {
  const [vehicledata, setVehicleData] = useState([]);
  const [key, setActiveTab] = useState("Popular");

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    VehicleCategoryApi({ _data: { categoryid: key } })
      .then((vehicleCategoryData) => {
        const sortedVehicleCategoryData = vehicleCategoryData.sort(
          (a, b) => b.id - a.id
        );
        setVehicleData(sortedVehicleCategoryData);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <Fragment>
      <div className="showroom-container-wrap">
        <div style={{ margin: "0px 20px" }}>
          <h1 className="cs-mainheader text-4xl">Find Your Everest Cars</h1>
          <Tabs
            defaultActiveKey={key}
            onSelect={handleSelect}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Popular" title="Popular">
              <Popular vehicles={vehicledata} />
            </Tab>
            <Tab eventKey="Offers" title="Offers">
              <Offers vehicles={vehicledata} />
            </Tab>
            <Tab eventKey="Brand New" title="Brand New">
              <BrandNew vehicles={vehicledata} />
            </Tab>
            <Tab eventKey="Electric" title="Electric">
              <Electric vehicles={vehicledata} />
            </Tab>
          </Tabs>
          <div className="cs-button">
            <CButton type={1} text="See More Cars" href="/vehicles/All" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Carshowroom;
