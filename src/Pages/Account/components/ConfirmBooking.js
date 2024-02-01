/* eslint-disable no-unused-vars */
//Libaries
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
//CSS
import "../components/styles/confirmbooking.css";
//API
import {
  BookingIDApi,
  BookingUploadDocumentApi,
  img_url,
} from "../../../api/Api";

import NoImage from "../../../assets/images/no-image.jpg";

function ConfirmBooking(props) {
  const { id } = useParams();
  const booking_id = id;
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    BookingIDApi({ _data: { bid: booking_id } })
      .then((bookingIDData) => {
        setBookingData(bookingIDData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [booking_id, props.GetUserApi]);

  const [validationError, setValidationError] = useState(false);

  let drivingLicenseFrontImg = "";
  const onChangeDrivingLicenseFront = (e) => {
    drivingLicenseFrontImg = e.target.files[0];
  };

  let drivingLicenseBackImg = "";
  const onChangeDrivingLicenseBack = (e) => {
    drivingLicenseBackImg = e.target.files[0];
  };

  let nationalIDFrontImg = "";
  const onChangeNationalIDFront = (e) => {
    nationalIDFrontImg = e.target.files[0];
  };

  let nationalIDBackImg = "";
  const onChangeNationalIDBack = (e) => {
    nationalIDBackImg = e.target.files[0];
  };

  const checkObjectValid = () => {
    if (
      drivingLicenseFrontImg !== "" &&
      drivingLicenseBackImg !== "" &&
      nationalIDFrontImg !== "" &&
      nationalIDBackImg !== ""
    ) {
      setValidationError(false);
      return true;
    } else {
      setValidationError(true);
      return false;
    }
  };

  const handleSendBookingSubmit = (e) => {
    e.preventDefault();
    if (checkObjectValid()) {
      BookingUploadDocumentApi({
        _data: {
          booking_id: booking_id,
          driving_license_front: drivingLicenseFrontImg,
          driving_license_back: drivingLicenseBackImg,
          national_id_front: nationalIDFrontImg,
          national_id_back: nationalIDBackImg,
        },
      })
        .then((bookingUploadData) => {
          console.log(
            "bookingUploadData>> ",
            JSON.stringify(bookingUploadData)
          );
          if (bookingUploadData.status) {
            window.location.href = "/account/booking/";
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <Fragment>
      <div className="main-content">
        <div className="confirmbooking">
          <p className="sub-title">
            My Bookings / Booking ID: {bookingData.booking_no}
          </p>
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-lg-8"
              style={{ marginBottom: "20px" }}
            >
              <Container className="confirmbooking-form-wrap">
                <div
                  className="sessionForm-wrap"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="title-main-div">
                    <p className="title-sub-div">
                      Waiting for your documentations
                    </p>
                    <span className="title-span-div">
                      {bookingData.check_status === "1" ||
                      bookingData.check_status === "2"
                        ? "Pending"
                        : "Reject"}
                    </span>
                  </div>
                  <div className="line"></div>
                  <div>
                    <p className="nextstep-css">Next Step</p>
                    <p className="document-css">Upload Documents</p>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "1rem",
                          color: validationError ? "red" : "",
                        }}
                      >
                        Driving License Front
                      </p>
                      <input
                        type="file"
                        onChange={onChangeDrivingLicenseFront}
                      />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required *</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "1rem",
                          color: validationError ? "red" : "",
                        }}
                      >
                        Driving License Back
                      </p>
                      <input
                        type="file"
                        onChange={onChangeDrivingLicenseBack}
                      />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required*</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "1rem",
                          color: validationError ? "red" : "",
                        }}
                      >
                        National ID Front
                      </p>
                      <input type="file" onChange={onChangeNationalIDFront} />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required *</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <p
                        style={{
                          marginBottom: "1rem",
                          color: validationError ? "red" : "",
                        }}
                      >
                        National ID Back
                      </p>
                      <input type="file" onChange={onChangeNationalIDBack} />
                      {validationError ? (
                        <div className="validation-Error">
                          <p>This field is required*</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                    <p style={{ fontWeight: "700", marginBottom: "5px" }}>
                      Mark sure the picture is:
                    </p>
                    <ul className="note-css">
                      <li>Readable and without any glare</li>
                      <li>Showing all 4 corners on a plain background</li>
                      <li>A photograph, not a scan or a screenshot</li>
                    </ul>
                  </div>
                  <div className="confirmSubmitgrp pageButtongrp">
                    <Button
                      className="sendSubmitForm"
                      onClick={(e) => {
                        handleSendBookingSubmit(e);
                      }}
                    >
                      Confirm and Send
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Container className="confirmbooking-form-wrap">
                <div>
                  <p style={{ marginBottom: "0.25rem" }}>Booking Summary</p>
                  <p className="car-title">{bookingData.model_name}</p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="confirmbooking-data-main-css">
                      <p className="confirmbooking-data-sub-css">
                        <span className="font-semibold text-green-500">
                          ${bookingData.subscription_price}
                        </span>
                        /month
                      </p>
                      <p className="confirmbooking-data-sub-css">
                        {bookingData.duration} months
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 img-main-div">
                    {bookingData.photo === "" ? (
                      <img src={NoImage} alt="" className="img-css" />
                    ) : (
                      <img
                        src={img_url + bookingData.photo}
                        alt=""
                        className="img-css"
                      />
                    )}
                  </div>
                </div>
                <div className="line1"></div>
                <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <p style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                    Disclaimer: This monthly price also includes tax, insurance,
                    maintenance and breakdown cover.
                  </p>
                  <div style={{ textAlign: "center", fontWeight: "600" }}>
                    <a href="/terms" style={{ textDecoration: "underline" }}>
                      Subscriber Terms &amp; Conditions
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(ConfirmBooking);
