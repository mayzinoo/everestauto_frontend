//libraries
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//components
import Pagination from "../components/Pagination";
//css
import "./styles/vehiclelist.css";
import NoImage from "../../../assets/images/no-image.jpg";
//API
import {
  DurationApi,
  BrandApi,
  BodyApi,
  FuelApi,
  VehiclesSearchApi,
  VehicleApi,
  VehicleCategoryApi,
  img_url,
} from "../../../api/Api";

function VehicleList(props) {
  const [searchData, setSearchData] = useState("");
  const [durationTypes, setDurationTypes] = useState([]);
  const [brandTypes, setBrandTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(6);

  let changeDuration = "";
  let changeBrand = "";
  let changeBodyType = "";
  let changeFuelType = "";
  const animatedComponents = makeAnimated();
  const { id } = useParams();

  // Get current Vehicles
  const indexOfLastVehicles = currentPage * vehiclesPerPage;
  const indexOfFirstVehicles = indexOfLastVehicles - vehiclesPerPage;
  const currentVehicles = vehicles.slice(
    indexOfFirstVehicles,
    indexOfLastVehicles
  );

  const vehicledata = currentVehicles;
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    DurationApi()
      .then((durationType) => {
        setDurationTypes(durationType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    BrandApi()
      .then((brandType) => {
        setBrandTypes(brandType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    BodyApi()
      .then((bodyType) => {
        setBodyTypes(bodyType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    FuelApi()
      .then((fuelType) => {
        setFuelTypes(fuelType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    if (id === "All") {
      VehicleApi()
        .then((vehicleData) => {
          const sortedVehicleData = vehicleData.sort((a, b) => b.id - a.id);
          setVehicles(sortedVehicleData);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      VehicleCategoryApi({ _data: { categoryid: id } })
        .then((vehicleCategoryData) => {
          const sortedVehicleCategoryData = vehicleCategoryData.sort(
            (a, b) => b.id - a.id
          );
          setVehicles(sortedVehicleCategoryData);
        })
        .catch((error) => {
          console.log("error", error);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    setLoading(false);
  }, [id]);

  // for (var i = 0; i < vehicles.length; i++) {
  //   if (vehicles[i].title_status === "Popular") {
  //     vehicles[i].title_status = "Popular";
  //   } else if (vehicles[i].title_status === "Offers") {
  //     vehicles[i].title_status = "Offers";
  //   } else if (vehicles[i].title_status === "Brand New") {
  //     vehicles[i].title_status = "Brand New";
  //   } else if (vehicles[i].title_status === "Electirc") {
  //     vehicles[i].title_status = "Electirc";
  //   }
  // }

  const handleChangeDuration = (duration) => {
    changeDuration = duration.value;
  };

  const handleChangeBrand = (brand) => {
    changeBrand = brand.value;
  };

  const handleChangeBodyType = (bodyType) => {
    changeBodyType = bodyType.value;
  };

  const handleChangeFlueType = (fuelType) => {
    changeFuelType = fuelType.value;
  };

  const handleSearchSubmit = () => {
    VehiclesSearchApi({
      _data: {
        name: searchData,
        duration: changeDuration,
        brand: changeBrand,
        bodytype: changeBodyType,
        fueltype: changeFuelType,
      },
    })
      .then((vehicleSearchData) => {
        const sortedVehicleSearchData = vehicleSearchData.sort(
          (a, b) => b.id - a.id
        );
        setVehicles(sortedVehicleSearchData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Fragment>
      <div className="vehicle-container-wrap">
        <div className="site-section">
          <div className="header-container container">
            <h1 className="title-css"> {vehicles.length} Car Models Available For You </h1>
            <div className="row mb-3">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="active-color-3 active-color-4 mb-4">
                  <input
                    className="form-control md"
                    type="text"
                    placeholder="Search Brands, Model, Year"
                    aria-label="Search"
                    name="search"
                    value={searchData}
                    onChange={(event) => setSearchData(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="active-color-3 active-color-4 mb-4">
                  <Select
                    defaultValue={durationTypes}
                    onChange={handleChangeDuration}
                    options={durationTypes.map((durationTypes, index) => {
                      return {
                        label: durationTypes.duration,
                        value: durationTypes.duration_id,
                        key: index,
                      };
                    })}
                    components={animatedComponents}
                    placeholder={"Month By Month"}
                    isSearchable={true}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="active-color-3 active-color-4 mb-4">
                  <Select
                    defaultValue={brandTypes}
                    onChange={handleChangeBrand}
                    options={brandTypes.map((brand, index) => {
                      return {
                        label: brand.brand_name,
                        value: brand.brand_name,
                        key: index,
                      };
                    })}
                    components={animatedComponents}
                    placeholder={"Brands"}
                    isSearchable={true}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="active-color-3 active-color-4 mb-4">
                  <Select
                    defaultValue={bodyTypes}
                    onChange={handleChangeBodyType}
                    options={bodyTypes.map((body, index) => {
                      return {
                        label: body.body_type,
                        value: body.id,
                        key: index,
                      };
                    })}
                    components={animatedComponents}
                    placeholder={"Body Type"}
                    isSearchable={true}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="active-color-3 active-color-4 mb-4">
                  <Select
                    defaultValue={fuelTypes}
                    onChange={handleChangeFlueType}
                    options={fuelTypes.map((fuel, index) => {
                      return {
                        label: fuel.fuel_type,
                        value: fuel.id,
                        key: index,
                      };
                    })}
                    components={animatedComponents}
                    placeholder={"Fuel Type"}
                    isSearchable={true}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Button
                  className="search-btn"
                  onClick={(e) => handleSearchSubmit(e)}
                >
                  Search
                </Button>
              </div>
            </div>
            {vehicledata.length > 0 ? (
              <div className="row">
                {vehicledata.map((vehicle, index) => {
                  return vehicle.title_status !== "" ? (
                    <Link
                      to={`/cardetails/${vehicle.id}`}
                      className="col-lg-4 col-md-6 mb-4"
                      key={`${index}`}
                    >
                      <div className="item-1">
                        <div className="popular-item">
                          <span className="catego-title">
                            {vehicle.title_status}
                          </span>
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
                              <span> $ {vehicle.rental_price}/</span>
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
                              <span className="spec">
                                {vehicle.transmission}
                              </span>
                            </li>
                            <li>
                              <span>Year</span>
                              <span className="spec">{vehicle.year}</span>
                            </li>
                          </ul>
                          <div className="d-block action text-center">
                            <Button className="btn btn-primary btn-width py-2 mr-1">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      to={`/cardetails/${vehicle.id}`}
                      className="col-lg-4 col-md-6 mb-4"
                      key={`${index}`}
                    >
                      <div className="item-1">
                        <div className="popular-item"></div>
                        <img
                          src={img_url + vehicle.photo}
                          alt=""
                          className="img-fluid"
                        />
                        <div className="item-1-contents">
                          <div className="text-center">
                            <h3>{vehicle.model_name}</h3>
                            <div className="rent-price">
                              <span> $ {vehicle.rental_price}/</span>
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
                              <span className="spec">
                                {vehicle.transmission}
                              </span>
                            </li>
                            <li>
                              <span>Year</span>
                              <span className="spec">{vehicle.year}</span>
                            </li>
                          </ul>
                          <div className="d-block action text-center">
                            <Button className="btn btn-primary btn-width py-2 mr-1">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div>
                <p className="no-data-css"> No Record Data Found !</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination
        vehiclesPerPage={vehiclesPerPage}
        totalVehicles={vehicles.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Fragment>
  );
}

export default VehicleList;
