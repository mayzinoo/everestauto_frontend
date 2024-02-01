//libraries
import React, { Fragment } from "react";
import Carousel from "react-elastic-carousel";
//components
import { Container } from "react-bootstrap";

//css
import "./styles/review.css";

function Review(props) {
  const reviewData = props.reviewData;
  //carousel breakpoints
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: true },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];

  return (
    <Fragment>
      <div className="review-container-wrap">
        <Container>
          <h1 className="cs-mainheader">TrustPilot Reviews</h1>
          <Carousel
            breakPoints={breakPoints}
            showArrows={true}
            pagination={true}
            style={{ marginBottom: "20px" }}
          >
            {reviewData.map((review, index) => {
              return (
                <a
                  className="cs-carousel-item-wrap"
                  key={`carousel-${index}`}
                  href="/gay"
                >
                  <div className="cs-carousel-item">
                    <div className="cs-star-details">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p
                      className="cs-item-details1"
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      {review.title}
                    </p>
                    <p className="cs-item-details">{review.descripton}</p>
                    <p className="cs-item-details1">{review.name}</p>
                  </div>
                </a>
              );
            })}
          </Carousel>
        </Container>
      </div>
    </Fragment>
  );
}

export default Review;
