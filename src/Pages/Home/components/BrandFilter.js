//libraries
import React, { Fragment, useEffect, useState } from "react";
//components
import { Container } from "react-bootstrap";
//css
import "./styles/brandfilter.css";

import { BrandApi, img_url } from "../../../api/Api";

function BrandFilter(props) {
  const [brandTypes, setBrandTypes] = useState([]);

  useEffect(() => {
    BrandApi()
      .then((brandType) => {
        setBrandTypes(brandType);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Fragment>
      <div className="brand-container-wrap" style={{ padding: "80px" }}>
        <Container className="brandfilter-container">
          <h1 className="bf-mainheader text-4xl">
            <strong style={{ color: "#E8C136" }}>Our Popular Brands</strong>
          </h1>
          <div className="bf-brandslogo-wrap">
            {brandTypes.map((brand, index) => {
              return (
                <a className="bf-brandslogo" href="/" key={index}>
                  <div className="bf-brandsImg-frame">
                    <img
                      className="bf-brandsImg"
                      src={img_url + brand.brand_photo}
                      alt=""
                    ></img>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default BrandFilter;
