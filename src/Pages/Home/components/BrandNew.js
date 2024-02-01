//libraries
import React, { Fragment } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
//css
import "./styles/brandnew.css";
import { img_url } from "../../../api/Api";
import NoImage from "../../../assets/images/no-image.jpg";

function BrandNew(props) {
  //carousel breakpoints
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];

  const vehicledata = props.vehicles;
  return (
    <Fragment>
      {vehicledata.length > 0 ? (
        <Carousel
          breakPoints={breakPoints}
          style={{ marginBottom: "20px" }}
          pagination={false}
          enableAutoPlay
          autoPlaySpeed={4000}
        >
          {vehicledata.map((vehicle, index) => {
            return (
              <Link to={`/cardetails/${vehicle.id}`} key={`carousel-${index}`}>
                <div className="item-1 popular-cs-carousel-item-wrap">
                  <div className="popular-item">
                    <span className="catego-title">Brand New</span>
                  </div>
                  {vehicle.photo === "" ? (
                          <img src={NoImage} alt="" className="img-fluid" />
                        ) : (
                          <img
                            src={img_url + vehicle.photo}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>{vehicle.model_name}</h3>
                      <div className="rent-price">
                        <span>${vehicle.rental_price}/</span>
                        month
                      </div>
                    </div>
                    <ul className="specs">
                      <li>
                        <span>Doors</span>
                        <span className="spec">{vehicle.door}</span>
                      </li>
                      <li>
                        <span>Seats</span>
                        <span className="spec">{vehicle.seat_qty}</span>
                      </li>
                      <li>
                        <span>Transmission</span>
                        <span className="spec">{vehicle.transmission}</span>
                      </li>
                      <li>
                        <span>Year</span>
                        <span className="spec">{vehicle.year}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      ) : (
        <div>
          <p className="no-data-css"> No Record Data Found !</p>
        </div>
      )}
    </Fragment>
  );
}

export default BrandNew;
