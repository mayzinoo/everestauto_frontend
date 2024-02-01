//libraries
import React, { Fragment } from "react";
//components
import Advertisement from "../components/Advertisement";
import Services from "../components/Services";
import Carshowroom from "../components/Carshowroom";
import UserGuide from "../components/UserGuide";
import BrandFilter from "../components/BrandFilter";
import PartnerGroup from "../components/PartnerGroup";
//css
import "../components/styles/home.css";
//API

function Home(props) {
  return (
    <Fragment>
      <Advertisement />
      <Services />
      <Carshowroom />
      <UserGuide />
      <BrandFilter />
      <PartnerGroup />
    </Fragment>
  );
}

export default Home;
