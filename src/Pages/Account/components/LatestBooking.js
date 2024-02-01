//Libraries
import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
//CSS
import "../components/styles/latestbooking.css";

import { img_url } from "../../../api/Api";
import NoImage from "../../../assets/images/no-image.jpg";

function LatestBooking(props) {
  const bookingData = props.bookingData;
  return (
    <Fragment>
      {bookingData.length > 0 ? (
        <div>
          {bookingData.map((booking, index) => {
            return (
              <div className="main-div" key={index}>
                <div className="img-main-div">
                  {booking.photo === "" ? (
                    <img src={NoImage} alt="" className="img-css" />
                  ) : (
                    <img
                      src={img_url + booking.photo}
                      alt=""
                      className="img-css"
                    />
                  )}
                </div>
                <div className="detail-main-div">
                  <div className="detail-sub-div">
                    <div className="title-main-div">
                      <p className="title-sub-div">{booking.model_name}</p>
                      <span className="title-span-div">
                        {booking.check_status === "1" ||
                        booking.check_status === "2"
                          ? "Pending"
                          : "Reject"}
                      </span>
                    </div>
                    <div className="booking-data-main-css">
                      <p className="booking-data-sub-css">
                        <span className="font-semibold text-green-500">
                          ${booking.subscription_price}
                        </span>
                        /month
                      </p>
                      <p className="booking-data-sub-css">
                        For {booking.duration} months
                      </p>
                      <p className="booking-data-sub-css">
                        Booking ID: {booking.booking_no}
                      </p>
                    </div>
                  </div>
                  <div className="btn-div">
                    <Button
                      className="btn-css"
                      href={`/account/confirmbooking/${booking.bid}`}
                    >
                      Upload Documents
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-data-main-div">
          <p className="no-data-css"> No Record Data Found !</p>
        </div>
      )}
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(LatestBooking);
