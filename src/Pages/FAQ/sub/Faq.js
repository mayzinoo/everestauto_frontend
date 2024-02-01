//libraries
import React, { Fragment, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Row, Col } from "react-bootstrap";
//API
import { FaqApi } from "../../../api/Api";
//css
import "../components/styles/faq.css";

function Faq(props) {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    FaqApi()
      .then((faqData) => {
        setFaq(faqData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Fragment>
      <div className="faq-container-wrap">
        <div>
          <p className="title-css"> FAQ</p>
        </div>
        {faq.length > 0 ? (
          <Row style={{ paddingTop: "38px", marginBottom: "24px" }}>
            {faq.map((faq, index) => {
              return (
                <Col md={6} key={index}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <h5>{faq.main_title}</h5>
                      <Accordion.Header>{faq.sub_title}</Accordion.Header>
                      <Accordion.Body
                        dangerouslySetInnerHTML={{
                          __html: faq.description,
                        }}
                      ></Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div>
            <p className="no-data-css"> No Record Data Found !</p>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Faq;
