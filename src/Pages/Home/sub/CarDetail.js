//libraries
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "react-elastic-carousel";
import { Modal, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Moment from "moment";
// import required css from library
import "react-datepicker/dist/react-datepicker.css";

//components
import { Container, Button } from "react-bootstrap";
import Services from "../components/Services";
import UserGuide from "../components/UserGuide";
//css
import "../components/styles/cardetail.css";
import {
  BsWhatsapp,
  BsCheck,
  BsFillExclamationTriangleFill,
  BsCalendar,
  BsClock,
  BsCreditCard,
} from "react-icons/bs";

//API
import {
  VehicleDetailApi,
  VehiclePhotosApi,
  VehicleColorsApi,
  VehicleFeaturesApi,
  VehiclePackageApi,
  BookingApi,
  BookingCheckApi,
  img_url,
} from "../../../api/Api";

import NoImageDetail from "../../../assets/images/no-image-detail.jpg";

function CarDetail(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1 },
    { width: 1450, itemsToShow: 1 },
    { width: 1750, itemsToShow: 1 },
  ];

  const { id } = useParams();
  const vehicle_id = id;
  const [vehicledata, setVehicles] = useState([]);
  const [userDetails, setUserDetails] = useState({
    id: "",
    first_name: "",
    last_name: "",
  });
  const [vehiclePhoto, setVehiclePhoto] = useState([]);
  const [vehicleColor, setVehicleColor] = useState([]);
  const [color, setColor] = useState("");
  const [vehicleFeature, setVehicleFeature] = useState([]);
  const [vehiclePackage, setVehiclePackage] = useState([]);
  const [have_package_status, setHavePackageStatus] = useState(false);

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));

    VehicleDetailApi({ _data: { vid: vehicle_id } })
      .then((vehicleDetailData) => {
        setVehicles(vehicleDetailData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehiclePhotosApi({ _data: { vid: vehicle_id } })
      .then((vehiclePhotoData) => {
        setVehiclePhoto(vehiclePhotoData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehicleColorsApi({ _data: { vid: vehicle_id } })
      .then((vehicleColorData) => {
        setVehicleColor(vehicleColorData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehicleFeaturesApi({ _data: { vid: vehicle_id } })
      .then((vehicleFeatureData) => {
        setVehicleFeature(vehicleFeatureData);
      })
      .catch((error) => {
        console.log("error", error);
      });

    VehiclePackageApi({ _data: { vid: vehicle_id } })
      .then((vehiclePackageData) => {
        console.log("vehiclePackageData..", JSON.stringify(vehiclePackageData));
        for (var i = 0; i < vehiclePackageData.length; i++) {
          if (vehiclePackageData[i].best_status === "") {
            const sortedVehiclePackageData = vehiclePackageData.sort(
              (a, b) => a.duraid - b.duraid
            );
            const last_pkgdata =
              sortedVehiclePackageData[sortedVehiclePackageData.length - 1];
            last_pkgdata.best = "true";
            setDuration(last_pkgdata.duraid);
            setPackagePrice(last_pkgdata.price);
          }
        }
        setVehiclePackage(vehiclePackageData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id, props.GetUserApi, vehicle_id]);

  const [user_id, setUserID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [price, setPrice] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [duration, setDuration] = useState("");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState("Morning");
  const [payment, setPayment] = useState("cash");
  const [deliveryPhNumber, setDeliveryPhNumber] = useState("");
  const [deliAddressLine1, setDeliAddressLine1] = useState("");
  const [deliAddressLine2, setDeliAddressLine2] = useState("");
  const [deliPostcode, setDeliPostcode] = useState("");
  const [deliRemark, setDeliRemark] = useState("");
  const [billingAddressLine1, setBillingAddressLine1] = useState("");
  const [billingAddressLine2, setBillingAddressLine2] = useState("");
  const [billingCountry, setBillingCountry] = useState("Singapore");
  const [billingState, setBillingState] = useState("");
  const [billingPhNumber, setBillingPhNumber] = useState("");
  const [billingPostcode, setBillingPostcode] = useState("");
  const [nextStepShow, setNextStepShow] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [subscription_price, setSubscriptionPrice] = useState("");
  const [total_amt, setTotalAmt] = useState("");
  const [bid, setBookingId] = useState("");
  const [checkedBilling, setCheckedBilling] = useState(false);
  //const [colorIndex, setColorIndex] = useState(10);
  const handleClose = () => setShow(false);

  const handleChangeColor = (color, index) => {
    setColor(color);
    //setColorIndex(index);
  };

  const handleChangeBilling = () => {
    setCheckedBilling(!checkedBilling);
  };

  useEffect(() => {
    if (checkedBilling) {
      setBillingPhNumber(deliveryPhNumber);
      setBillingAddressLine1(deliAddressLine1);
      setBillingAddressLine2(deliAddressLine2);
      setBillingPostcode(deliPostcode);
    }
    else {
      setBillingPhNumber("");
      setBillingAddressLine1("");
      setBillingAddressLine2("");
      setBillingPostcode("");
    }
  }, [checkedBilling, deliveryPhNumber, deliAddressLine1, deliAddressLine2, deliPostcode])


  let vehicleCoverPhoto;
  for (var j = 0; j < vehicledata.length; j++) {
    vehicleCoverPhoto = vehicledata[j].photo;
  }

  let defaultPackagePrice;
  let defaultPackageDuration;
  for (var i = 0; i < vehiclePackage.length; i++) {
    if (vehiclePackage[i].best_status === "bestsaver") {
      defaultPackagePrice = vehiclePackage[i].price;
      defaultPackageDuration = vehiclePackage[i].duration;
    }
  }

  let delivery_date = Moment(date).format("YYYY-MM-DD");

  const handleChangePackage = (id, duraid, price) => {
    setDuration(duraid);
    setPackagePrice(price);
    for (var i = 0; i < vehiclePackage.length; i++) {
      if (vehiclePackage[i].id === id) {
        vehiclePackage[i].best = "true";
      } else {
        vehiclePackage[i].best = "false";
      }
    }
  };

  const handleShow = () => {
    if (color) {
      setInputError(false);
      if (userDetails != null) {
        setUserID(userDetails.id);
        setFirstName(userDetails.first_name);
        setLastName(userDetails.last_name);
        if (packagePrice !== "" && duration !== "") {
          setPrice(packagePrice);
          setDuration(duration);
        } else {
          setPrice(defaultPackagePrice);
          setDuration(defaultPackageDuration);
        }
        if (vehiclePackage.length > 0 && packagePrice !== "" && duration !== "") {
          setHavePackageStatus(false)
          setShow(true);
        }
        else {
          setHavePackageStatus(true);
        }
        //setShow(true);
      } else {
        window.location.href = "/register";
      }
    } else {
      setInputError(true);
    }
  };

  /*  const handleNextStepClose = () => setNextStepShow(false); */
  const handleNextStepShow = () => {
    if (
      payment &&
      deliveryPhNumber &&
      deliAddressLine1 &&
      deliPostcode &&
      billingPhNumber &&
      billingAddressLine1 &&
      billingPostcode
    ) {
      setInputError(false);
      return true;
    } else {
      setInputError(true);
      return false;
    }
  };

  const handleBookingRequest = (e) => {
    e.preventDefault();
    if (handleNextStepShow()) {
      BookingApi({
        _data: {
          user_id,
          vehicle_id,
          duration,
          price,
          color,
          delivery_date,
          deliveryTime,
          payment,
          deliveryPhNumber,
          deliAddressLine1,
          deliAddressLine2,
          deliPostcode,
          deliRemark,
          billingAddressLine1,
          billingAddressLine2,
          billingPhNumber,
          billingPostcode,
          billingCountry,
          billingState,
        },
      })
        .then((bookingData) => {
          if (bookingData.status === 1) {
            setBookingId(bookingData.data.id);
            setSubscriptionPrice(bookingData.data.subscription_price);
            setTotalAmt(bookingData.data.total_amt);
            setNextStepShow(true);
            setShow(false);
          } else {
            setInputError(true);
            setNextStepShow(false);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleBookingConfirm = (e) => {
    //e.preventDefault();
    let check_status = "true";
    BookingCheckApi({ _data: { bid, check_status, vehicle_id } })
      .then((bookingRequestData) => {
        if (bookingRequestData.status === 1) {
          window.location.href = "/account/booking/";
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleBookingCancel = () => {
    //e.preventDefault();
    let check_status = "false";
    BookingCheckApi({ _data: { bid, check_status, vehicle_id } })
      .then((bookingRequestData) => {
        if (bookingRequestData.status === 1) {
          setDate(new Date());
          setDeliveryTime("Morning");
          setPayment("cash");
          setDeliveryPhNumber("");
          setDeliAddressLine1("");
          setDeliAddressLine2("");
          setDeliPostcode("");
          setDeliRemark("");
          setBillingAddressLine1("");
          setBillingAddressLine2("");
          setBillingCountry("");
          setBillingState("");
          setBillingPhNumber("");
          setBillingPostcode("");
          setNextStepShow(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <div className="car-container-wrap">
        <div className="car-container">
          {vehiclePhoto.length > 0 ? (
            <Container>
              <Carousel
                breakPoints={breakPoints}
                style={{ marginBottom: "20px" }}
                pagination={false}
                enableAutoPlay
                autoPlaySpeed={4000}
              >
                {vehiclePhoto.map((photo, index) => {
                  return (
                    <div
                      className="item-1 vehicle-cs-carousel-item-wrap"
                      key={`carousel-${index}`}
                    >
                      {photo.photos === "" ? (
                        <img src={NoImageDetail} alt="" className="img-fluid" />
                      ) : (
                        <img
                          src={img_url + photo.photos}
                          alt=""
                          className="img-fluid"
                        />
                      )}
                    </div>
                  );
                })}
              </Carousel>
            </Container>
          ) : (
            <Container>
              <Carousel
                breakPoints={breakPoints}
                style={{ marginBottom: "20px" }}
                pagination={false}
                enableAutoPlay
                autoPlaySpeed={4000}
              >
                <div className="item-1 vehicle-cs-carousel-item-wrap">
                  <img
                    src={img_url + vehicleCoverPhoto}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Carousel>
            </Container>
          )}

          {vehicledata.map((vehicleData, index) => {
            return (
              <Container key={index}>
                <div className="row row-css">
                  <div className="col-sm-12 col-md-12 col-lg-6 div-col-css">
                    <div style={{ margin: "30px 20px" }}>
                      <p
                        style={{
                          marginBottom: "18px",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        Model Details
                      </p>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Year
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.year}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Body
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.body_type}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Fuel
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.fuel_type}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Transmission
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.transmission}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Engine
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.engine_type}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Doors
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.door}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Seats
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.seat_qty}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Consumption (litres/100 km)
                          </p>
                          <p
                            style={{
                              fontSize: "1rem",
                              color: "#000",
                              opacity: "0.9",
                            }}
                          >
                            {vehicleData.consumption}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Features
                          </p>
                          <div className="row">
                            {vehicleFeature.map((feature, index) => {
                              return (
                                <div
                                  className="col-sm-12 col-md-6 col-lg-6"
                                  key={index}
                                >
                                  <p
                                    style={{
                                      fontSize: "1rem",
                                      color: "#000",
                                      opacity: "0.9",
                                      marginBottom: "0rem",
                                    }}
                                  >
                                    {feature}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: "18px" }}>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                          <p
                            style={{
                              marginBottom: "3px",
                              fontSize: ".875rem",
                              color: "#9CA3AF",
                            }}
                          >
                            Contact Everest
                          </p>
                          <a
                            href="https://api.whatsapp.com/send/?phone=%2B6581736535&text=I'm%20interested%20in%20your%20car.&app_absent=0"
                            className="whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsWhatsapp className="whatsapp-bsicon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 div-col1-css">
                    <div style={{ margin: "30px 20px" }}>
                      <p
                        style={{
                          marginBottom: "18px",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        {vehicleData.model_name}
                      </p>
                    </div>
                    <div className="row" style={{ margin: "0px 10px" }}>
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <p
                          style={{
                            marginBottom: "3px",
                            fontSize: ".875rem",
                            color: "#9CA3AF",
                          }}
                        >
                          CHOOSE SUBSCRIPTION
                        </p>
                      </div>
                      {vehiclePackage.length > 0 &&
                        <div
                          key={index}
                          className="row"
                          style={{ marginLeft: "2px", marginTop: "15px" }}
                        >
                          {vehiclePackage.map((vpackage, index) => {
                            return (
                              <>
                                {
                                  vpackage.duraid !== null &&
                                  <div
                                    id="price"
                                    className="col-sm-6 col-md-4 col-lg-4 choose-main-css"
                                    style={
                                      vpackage.best === "true"
                                        ? { borderColor: "#E8C136" }
                                        : { borderColor: " #9CA3AF" }
                                    }
                                    key={index}
                                    onClick={() =>
                                      handleChangePackage(
                                        vpackage.id,
                                        vpackage.duraid,
                                        vpackage.price
                                      )
                                    }
                                  >
                                    {vpackage.best_status === "bestsaver" && (
                                      <span className="sub-span">Best Saver</span>
                                    )}

                                    {vpackage.best === "true" ? (
                                      <div style={{ display: "flex" }}>
                                        <div style={{ marginLeft: "15px" }}>
                                          <p className="choose-sub-css">
                                            {vpackage.duration_name}
                                          </p>
                                          <p
                                            id="price-text"
                                            className="choose-sub1-css"
                                            style={
                                              vpackage.best === "true"
                                                ? { color: "#E8C136" }
                                                : { color: " #9CA3AF" }
                                            }
                                          >
                                            SGD {vpackage.price}/month
                                          </p>
                                        </div>
                                        <div
                                          style={{
                                            marginLeft: "7px",
                                          }}
                                        >
                                          <BsCheck className="check-css" />
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        <p className="choose-sub-css">
                                          {vpackage.duration_name}
                                        </p>
                                        <p
                                          id="price-text"
                                          className="choose-sub1-css"
                                          style={
                                            vpackage.best === "true"
                                              ? { color: "#E8C136" }
                                              : { color: " #9CA3AF" }
                                          }
                                        >
                                          SGD {vpackage.price}/month
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                }
                              </>

                            );
                          })}
                        </div>
                      }
                      {have_package_status && (
                        <span className="preEmpt-error-msg" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                          Package Not Found !
                        </span>
                      )}
                      <div className="line"></div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                          <p
                            style={{
                              textAlign: "left",
                              marginBottom: "3px",
                              marginTop: "6px",
                            }}
                          >
                            Your Subscriptions
                          </p>
                        </div>
                        {packagePrice !== "" ? (
                          <div className="col-sm-12 col-md-6 col-lg-7">
                            <p
                              style={{
                                textAlign: "right",
                                marginBottom: "3px",
                              }}
                            >
                              <span className="cs-item-price">
                                {packagePrice}
                              </span>
                              /month, NETT
                            </p>
                          </div>
                        ) : (
                          <div className="col-sm-12 col-md-6 col-lg-7">
                            <p
                              style={{
                                textAlign: "right",
                                marginBottom: "3px",
                              }}
                            >
                              <span className="cs-item-price">
                                {defaultPackagePrice}
                              </span>
                              /month, NETT
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="line"></div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                          <p
                            style={{
                              textAlign: "left",
                              marginBottom: "3px",
                              marginTop: "6px",
                            }}
                          >
                            Check Availability
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7">
                          <div className="color-div">
                            <span className="color-text">Colors:</span>
                            {vehicleColor.map((color, index) => {
                              return (
                                <span
                                  className="color-text1"
                                  onClick={() =>
                                    handleChangeColor(color, index)
                                  }
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  key={index}
                                >
                                  {color}
                                </span>
                                /*  <div key={index}>
                                  {colorIndex === index ? (
                                    <div
                                      onClick={() =>
                                        handleChangeColor(color, index)
                                      }
                                      className="color-box"
                                      style={{
                                        background: color,
                                        border: "1px solid #E86836",
                                        cursor: "pointer",
                                      }}
                                    ></div>
                                  ) : (
                                    <div
                                      onClick={() =>
                                        handleChangeColor(color, index)
                                      }
                                      className="color-box"
                                      style={{
                                        background: color,
                                        border: "1px solid #000",
                                        cursor: "pointer",
                                      }}
                                    ></div>
                                  )}
                                </div> */
                              );
                            })}
                          </div>
                          {inputError && !color ? (
                            <span className="preEmpt-error-msg">
                              Please Select Color !
                            </span>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="line"></div>
                      {vehicleData.status === "0" ? (
                        <div className="row" style={{ marginBottom: "22px" }}>
                          <Button onClick={handleShow} className="book-btn">
                            Booking Now
                          </Button>
                        </div>
                      ) : (
                        <div style={{ marginBottom: "22px" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <BsFillExclamationTriangleFill className="exclamation" />
                            <p className="exclamation-text">
                              This car is not available.
                            </p>
                          </div>
                          <p style={{ textAlign: "center", fontSize: "18px" }}>
                            Available Dates on
                            <strong> {vehicleData.available_date} .</strong>
                          </p>
                        </div>
                      )}

                      <Modal
                        show={show}
                        onHide={handleClose}
                        dialogClassName="modal-80w"
                        aria-labelledby="example-custom-modal-styling-title"
                        backdrop="static"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <div style={{ fontSize: "16px" }}>Step 1 of 2</div>
                            <div className="modal-title">
                              How Would You Like To Get Your Car?
                            </div>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Row className="mb-3">
                              <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="exampleForm.ControlInput4"
                              >
                                <div className="radio-div">
                                  <Form.Check
                                    type="radio"
                                    id="custom-radio"
                                    checked={true}
                                    readOnly
                                    label="I'd like it delivered"
                                  />
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                  <label style={{ marginBottom: "14px" }}>
                                    Delivery Date:
                                  </label>
                                  <div
                                    style={{
                                      display: "flex",
                                      marginLeft: "24px",
                                    }}
                                  >
                                    <BsCalendar className="calendar-css" />
                                    <DatePicker
                                      selected={date}
                                      onChange={(date) => setDate(date)}
                                    />
                                  </div>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                  <label style={{ marginBottom: "14px" }}>
                                    Delivery Time:
                                  </label>
                                  <div
                                    style={{
                                      display: "flex",
                                      marginLeft: "24px",
                                    }}
                                  >
                                    <BsClock className="clock-css" />
                                    <Form.Select
                                      aria-label="Default select example"
                                      value={deliveryTime}
                                      onChange={(e) =>
                                        setDeliveryTime(e.target.value)
                                      }
                                    >
                                      <option value="Morning">Morning</option>
                                      <option value="Afternoon">
                                        Afternoon
                                      </option>
                                      <option value="Evening">Evening</option>
                                    </Form.Select>
                                  </div>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                  <label style={{ marginBottom: "14px" }}>
                                    Payment
                                  </label>
                                  <div
                                    style={{
                                      display: "flex",
                                      marginLeft: "24px",
                                    }}
                                  >
                                    <BsCreditCard className="creditcard-css" />
                                    <Form.Select
                                      aria-label="Default select example"
                                      value={payment}
                                      onChange={(e) =>
                                        setPayment(e.target.value)
                                      }
                                    >
                                      <option value="cash">Cash</option>
                                      <option value="bank">Bank</option>
                                    </Form.Select>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      marginLeft: "57px",
                                    }}
                                  >
                                    {inputError && !payment ? (
                                      <span className="preEmpt-error-msg">
                                        Payment is required !
                                      </span>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="exampleForm.ControlInput5"
                              >
                                <Form.Label style={{ marginBottom: "20px" }}>
                                  Delivery Address:
                                </Form.Label>
                                <div style={{ marginBottom: "13px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Delivery Phone Number"
                                    value={deliveryPhNumber}
                                    onChange={(e) =>
                                      setDeliveryPhNumber(e.target.value)
                                    }
                                  />
                                  {inputError && !deliveryPhNumber ? (
                                    <span className="preEmpt-error-msg">
                                      Phone Number is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div style={{ marginBottom: "13px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Address 1"
                                    value={deliAddressLine1}
                                    onChange={(e) =>
                                      setDeliAddressLine1(e.target.value)
                                    }
                                  />
                                  {inputError && !deliAddressLine1 ? (
                                    <span className="preEmpt-error-msg">
                                      Address is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div style={{ marginBottom: "13px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Address 2"
                                    value={deliAddressLine2}
                                    onChange={(e) =>
                                      setDeliAddressLine2(e.target.value)
                                    }
                                  />
                                </div>
                                <div style={{ marginBottom: "13px" }}>
                                  <input
                                    className="form-control md"
                                    type="number"
                                    placeholder="Postcode"
                                    value={deliPostcode}
                                    onChange={(e) =>
                                      setDeliPostcode(e.target.value)
                                    }
                                  />
                                  {inputError && !deliPostcode ? (
                                    <span className="preEmpt-error-msg">
                                      Postcode is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div>
                                  <Form.Control
                                    as="textarea"
                                    rows="4"
                                    placeholder="Delivery Remark"
                                    value={deliRemark}
                                    onChange={(e) =>
                                      setDeliRemark(e.target.value)
                                    }
                                  />
                                </div>
                              </Form.Group>
                            </Row>
                            <div className="line1"></div>
                            <Row>
                              <Form.Group
                                as={Col}
                                controlId="exampleForm.ControlInput3"
                              >
                                <Form.Label
                                  style={{
                                    marginBottom: "20px",
                                    marginTop: "0.7rem",
                                  }}
                                >
                                  Billing:
                                </Form.Label>
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                controlId="exampleForm.ControlInput3"
                              >
                                <div style={{ marginBottom: "15px", marginLeft: "8px" }}>
                                  <Form.Check
                                    className="form-check-billing"
                                    type="checkbox"
                                    id="custom-radio"
                                    checked={checkedBilling}
                                    label="Same as delivery address"
                                    onChange={() => handleChangeBilling()}
                                  />
                                </div>
                              </Form.Group>
                            </Row>
                            {!checkedBilling &&
                              <div className="row" style={{ marginLeft: "10px" }}>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput4"
                                  >
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="number"
                                        placeholder="Billing Phone Number"
                                        value={billingPhNumber}
                                        onChange={(e) =>
                                          setBillingPhNumber(e.target.value)
                                        }
                                      />
                                      {inputError && !billingPhNumber ? (
                                        <span className="preEmpt-error-msg">
                                          Mobile Number is required !
                                        </span>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="text"
                                        placeholder="Address 1"
                                        value={billingAddressLine1}
                                        onChange={(e) =>
                                          setBillingAddressLine1(e.target.value)
                                        }
                                      />
                                      {inputError && !billingAddressLine1 ? (
                                        <span className="preEmpt-error-msg">
                                          Address is required !
                                        </span>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="text"
                                        placeholder="Address 2"
                                        value={billingAddressLine2}
                                        onChange={(e) =>
                                          setBillingAddressLine2(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="number"
                                        placeholder="Postcode"
                                        value={billingPostcode}
                                        onChange={(e) =>
                                          setBillingPostcode(e.target.value)
                                        }
                                      />
                                      {inputError && !billingPostcode ? (
                                        <span className="preEmpt-error-msg">
                                          Postcode is required !
                                        </span>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </Form.Group>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                  <Form.Group
                                    as={Col}
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput5"
                                  >
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="text"
                                        placeholder="Country"
                                        value={billingCountry}
                                        onChange={(e) =>
                                          setBillingCountry(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="text"
                                        placeholder="City"
                                        value={billingCountry}
                                        onChange={(e) => setBillingCountry(e.target.value)}
                                      />
                                    </div>
                                    <div style={{ marginBottom: "15px" }}>
                                      <input
                                        className="form-control md"
                                        type="text"
                                        placeholder="State"
                                        value={billingState}
                                        onChange={(e) => setBillingState(e.target.value)}
                                      />
                                    </div>
                                  </Form.Group>
                                </div>
                              </div>}
                            {/* <Row style={{ marginLeft: "10px" }}>
                              <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="exampleForm.ControlInput4"
                              >
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Address 1"
                                    value={billingAddressLine1}
                                    onChange={(e) =>
                                      setBillingAddressLine1(e.target.value)
                                    }
                                  />
                                  {inputError && !billingAddressLine1 ? (
                                    <span className="preEmpt-error-msg">
                                      Address is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="number"
                                    placeholder="Billing Phone Number"
                                    value={billingPhNumber}
                                    onChange={(e) =>
                                      setBillingPhNumber(e.target.value)
                                    }
                                  />
                                  {inputError && !billingPhNumber ? (
                                    <span className="preEmpt-error-msg">
                                      Phone Number is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Country"
                                    value={billingCountry}
                                    onChange={(e) =>
                                      setBillingCountry(e.target.value)
                                    }
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                className="mb-3"
                                controlId="exampleForm.ControlInput5"
                              >
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="Address 2"
                                    value={billingAddressLine2}
                                    onChange={(e) =>
                                      setBillingAddressLine2(e.target.value)
                                    }
                                  />
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="number"
                                    placeholder="Postcode"
                                    value={billingPostcode}
                                    onChange={(e) =>
                                      setBillingPostcode(e.target.value)
                                    }
                                  />
                                  {inputError && !billingPostcode ? (
                                    <span className="preEmpt-error-msg">
                                      Postcode is required !
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                  <input
                                    className="form-control md"
                                    type="text"
                                    placeholder="State"
                                    value={billingState}
                                    onChange={(e) =>
                                      setBillingState(e.target.value)
                                    }
                                  />
                                </div>
                              </Form.Group>
                            </Row> */}
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Row>
                            <Form.Group
                              as={Col}
                              controlId="exampleForm.ControlInput1"
                            >
                              {packagePrice !== "" ? (
                                <div>
                                  <p
                                    style={{
                                      textAlign: "left",
                                    }}
                                  >
                                    <span className="cs-item-price">
                                      {packagePrice}
                                    </span>
                                    /month
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <p
                                    style={{
                                      textAlign: "left",
                                    }}
                                  >
                                    <span className="cs-item-price">
                                      {defaultPackagePrice}
                                    </span>
                                    /month
                                  </p>
                                </div>
                              )}
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              controlId="exampleForm.ControlInput1"
                              className="fooder"
                            >
                              <Button
                                className="fooder-btn"
                                onClick={handleBookingRequest}
                              >
                                Booking Request
                              </Button>
                            </Form.Group>
                          </Row>
                        </Modal.Footer>
                      </Modal>
                      <Modal
                        show={nextStepShow}
                        onHide={handleBookingCancel}
                        dialogClassName="modal-80w"
                        aria-labelledby="example-custom-modal-styling-title"
                        backdrop="static"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <div style={{ fontSize: "16px" }}>Step 2 of 2</div>
                            <div className="modal-title">Payment Detail</div>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="modal-title">
                            {vehicleData.model_name}
                          </div>
                          <Row style={{ marginTop: "30px" }}>
                            <div>
                              <p
                                style={{
                                  fontWeight: "700",
                                  marginBottom: "5px",
                                }}
                              >
                                Subscriptin Details
                              </p>
                            </div>
                            <div className="row" style={{ display: "flex" }}>
                              <div className="col-md-6 col-lg-6">
                                <p style={{ marginBottom: "5px" }}>
                                  Monthly Vehicle Fee
                                </p>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  SGD {subscription_price}
                                </p>
                              </div>
                            </div>
                            <div className="row" style={{ display: "flex" }}>
                              <div className="col-md-6 col-lg-6">
                                <p
                                  style={{
                                    fontWeight: "700",
                                    marginBottom: "5px",
                                  }}
                                >
                                  Total Amount Chargeable
                                </p>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                <p
                                  style={{
                                    fontWeight: "700",
                                    marginBottom: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  SGD {total_amt}
                                </p>
                              </div>
                            </div>
                          </Row>
                          <div className="line2"></div>
                          <div
                            className="row"
                            style={{ display: "flex", marginLeft: " 20px" }}
                          >
                            <div className="col-md-6 col-lg-6">
                              <p style={{ marginBottom: "5px" }}>First Name</p>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                                }}
                              >
                                {firstName}
                              </p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                              <p
                                style={{
                                  marginBottom: "5px",
                                }}
                              >
                                Last Name
                              </p>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  marginBottom: "5px",
                                }}
                              >
                                {lastName}
                              </p>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <div className="booking-fooder">
                            <p>
                              You won't be charged for the subscription until
                              the booking has been confirmed by Everest Auto.
                            </p>
                          </div>
                          <Form.Group
                            as={Col}
                            controlId="exampleForm.ControlInput1"
                            className="booking-fooder"
                          >
                            <Button
                              onClick={handleBookingCancel}
                              className="fooder-btn"
                            >
                              Cancel Request
                            </Button>
                            <Button
                              onClick={handleBookingConfirm}
                              className="fooder-btn"
                            >
                              Confirm
                            </Button>
                          </Form.Group>
                          {/* <div className="booking-fooder">
                            <p style={{ fontWeight: "bold", color: "green" }}>
                              Successfully Your Booking Request !
                            </p>
                          </div> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ margin: "40px 10px" }}>
                  <div className="col-md-12 col-lg-12">
                    <h2
                      style={{
                        marginBottom: "18px",
                        fontSize: "32px",
                        fontWeight: "bold",
                      }}
                    >
                      {vehicleData.model_name}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: vehicleData.description,
                      }}
                    ></div>
                  </div>
                </div>
              </Container>
            );
          })}
        </div>
      </div>
      <Services />
      <UserGuide />
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(CarDetail);
