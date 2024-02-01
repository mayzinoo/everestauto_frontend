//libraries
import React, { Fragment } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
//components
import { Container, Card, Button } from "react-bootstrap";
//css
import "./styles/carmoldel.css";

function Carmoldel(props) {
  const carPosts = props.carPosts;
  const animatedComponents = makeAnimated();
  const Cartype = [
    { label: "Mercedes-Benz", value: 1 },
    { label: "Audi", value: 2 },
    { label: "Bentley", value: 3 },
    { label: "BMW", value: 4 },
    { label: "Byd", value: 5 },
    { label: "Chevrolet", value: 6 },
    { label: "Honda", value: 7 },
    { label: "Hyundai", value: 8 },
    { label: "Kia", value: 9 },
    { label: "Lexus", value: 10 },
    { label: "Toyota", value: 11 },
    { label: "Suzuki", value: 12 },
  ];

  return (
    <Fragment>
      <div className="vehicle-container-wrap">
        <Container>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="active-color-3 active-color-4 mb-4">
                  <input
                    className="form-control md"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div>
                  <p
                    style={{ margin: "10px 0px 20px 0px", textAlign: "center" }}
                  >
                    80 Car Models Available For You
                  </p>
                </div>
                <div>
                  {carPosts.map((posts, index) => {
                    return posts.popular === "BEST OFFER" ? (
                      <Card border="primary" key={`${index}`}>
                        <div style={{ margin: "10px 10px", height: "40px" }}>
                          <Button variant="primary">{posts.popular}</Button>
                        </div>
                        <div className="row" style={{ margin: "30px 10px" }}>
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="cs-item">
                              <img
                                className="cs-item-img"
                                src={posts.profile}
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div>
                              <p style={{ fontSize: "25px" }}>{posts.name}</p>
                            </div>
                            <div>
                              <p style={{ textAlign: "right" }}>
                                <span>
                                  {posts.type}
                                  <span>&nbsp;|&nbsp;</span>
                                  {posts.transmission}
                                  <span>&nbsp;|&nbsp;</span>
                                  {posts.seatCapacity} seats
                                </span>
                              </p>
                              <p className="cs-item-price">
                                <span
                                  style={{
                                    color: "#E8C136",
                                    fontSize: "22px",
                                    paddingTop: "0px",
                                  }}
                                >
                                  SGD {posts.price}&nbsp;
                                </span>
                                <span
                                  style={{
                                    paddingTop: "1px",
                                    fontSize: "18px",
                                  }}
                                >
                                  /month
                                </span>
                              </p>
                              <p style={{ textAlign: "right", color: "gray" }}>
                                <span> For {posts.duration} Months</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ) : null;
                  })}
                </div>
                <div className="row" style={{ margin: "15px 0px" }}>
                  {carPosts.map((posts, index) => {
                    return posts.popular !== "" ? (
                      <div
                        className="col-sm-12 col-md-12 col-lg-6"
                        key={`${index}`}
                      >
                        <Card border="primary">
                          <div
                            className="cs-item-price"
                            style={{ margin: "10px 10px", height: "40px" }}
                          >
                            <Button variant="primary">{posts.popular}</Button>
                          </div>
                          <Card.Img variant="top" src={posts.profile} />
                          <Card.Body>
                            <Card.Title>{posts.name}</Card.Title>
                            <div>
                              <span>
                                {posts.type}
                                <span>&nbsp;|&nbsp;</span>
                                {posts.transmission}
                                <span>&nbsp;|&nbsp;</span>
                                {posts.seatCapacity} seats
                              </span>
                              <p className="cs-item-price1">
                                <span
                                  style={{
                                    color: "#E8C136",
                                    fontSize: "20px",
                                    marginTop: "0.4rem",
                                  }}
                                >
                                  SGD {posts.price}&nbsp;
                                </span>
                                <span style={{ marginTop: "0.4rem" }}>
                                  /month
                                </span>
                              </p>
                              <span style={{ color: "gray" }}>
                                For {posts.duration} Months
                              </span>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ) : (
                      <div
                        className="col-sm-12 col-md-12 col-lg-6"
                        key={`${index}`}
                      >
                        <Card border="primary">
                          <div
                            className="cs-item-price"
                            style={{ margin: "10px 10px", height: "40px" }}
                          ></div>
                          <Card.Img variant="top" src={posts.profile} />
                          <Card.Body>
                            <Card.Title>{posts.name}</Card.Title>
                            <div>
                              <span>
                                {posts.type}
                                <span>&nbsp;|&nbsp;</span>
                                {posts.transmission}
                                <span>&nbsp;|&nbsp;</span>
                                {posts.seatCapacity} seats
                              </span>
                              <p className="cs-item-price1">
                                <span
                                  style={{
                                    color: "#E8C136",
                                    fontSize: "20px",
                                    marginTop: "0.4rem",
                                  }}
                                >
                                  SGD {posts.price}&nbsp;
                                </span>
                                <span style={{ marginTop: "0.4rem" }}>
                                  /month
                                </span>
                              </p>
                              <span style={{ color: "gray" }}>
                                For {posts.duration} Months
                              </span>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <Card border="primary">
                  <div style={{ margin: "15px 15px 0px 10px" }}>
                    <p> Refine Your Search</p>
                    <p> Duration </p>
                  </div>
                  <div style={{ margin: "10px 18px 10px 10px" }}>
                    <div className="row">
                      <div className="col-8">
                        <Button
                          variant="outline-primary"
                          style={{ width: "277px" }}
                        >
                          Month By Month
                        </Button>
                      </div>
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          12 Months
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "0px 18px 10px 10px" }}>
                    <div className="row">
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          6 Months
                        </Button>
                      </div>
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          12 Months
                        </Button>
                      </div>
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          24 Months
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "0px 18px 10px 10px" }}>
                    <div className="row">
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          36 Months
                        </Button>
                      </div>
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          48 Months
                        </Button>
                      </div>
                      <div className="col-4">
                        <Button
                          variant="outline-primary"
                          style={{ width: "130px" }}
                        >
                          60 Months
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "15px 15px 0px 10px" }}>
                    <p> Brands </p>
                  </div>
                  <div style={{ margin: "10px 10px 10px 10px" }}>
                    <Select
                      options={Cartype}
                      components={animatedComponents}
                      isMulti
                    />
                  </div>
                  <div style={{ margin: "15px 15px 0px 10px" }}>
                    <p> Body Type </p>
                  </div>
                  <div style={{ margin: "10px 20px 10px 10px" }}>
                    <div className="row">
                      <div className="col-6">
                        <Button
                          variant="outline-primary"
                          style={{ width: "203px" }}
                        >
                          Hatchback
                        </Button>
                      </div>
                      <div className="col-6">
                        <Button
                          variant="outline-primary"
                          style={{ width: "203px" }}
                        >
                          MPV
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "10px 15px 0px 10px" }}>
                    <p> Fuel Type </p>
                  </div>
                  <div style={{ margin: "10px 15px 80px 10px" }}>
                    <div className="row">
                      <div className="col-3">
                        <Button
                          variant="outline-primary"
                          style={{ width: "92px" }}
                        >
                          Diesel
                        </Button>
                      </div>
                      <div className="col-3">
                        <Button
                          variant="outline-primary"
                          style={{ width: "92px" }}
                        >
                          Electric
                        </Button>
                      </div>
                      <div className="col-3">
                        <Button
                          variant="outline-primary"
                          style={{ width: "92px" }}
                        >
                          Hybrid
                        </Button>
                      </div>
                      <div className="col-3">
                        <Button
                          variant="outline-primary"
                          style={{ width: "92px" }}
                        >
                          Petrol
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Carmoldel;
