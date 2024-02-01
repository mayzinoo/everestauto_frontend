//Libraries
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
//CSS
import "../components/styles/invoicedetail.css";
//image
import Logo from "../../../assets/images/logo.png";
//API
import { InvoiceDetailApi } from "../../../api/Api";

function InvoiceDetail(props) {
  const { id } = useParams();
  const invoice_id = id;
  const [invoiceDetailData, setInvoiceDetailData] = useState([]);

  useEffect(() => {
    InvoiceDetailApi({ _data: { invoiceid: invoice_id } })
      .then((invoiceDetailData) => {
        setInvoiceDetailData(invoiceDetailData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [props.GetUserApi, invoice_id]);

  const userName = invoiceDetailData.fname + " " + invoiceDetailData.lname;

  return (
    <Fragment>
      <div className="main-content">
        <div className="myinvoice">
          <div className="row" style={{ display: "flex" }}>
            <div className="col-md -6 col-lg-6">
              <p className="sub-title">Invoice Detail</p>
            </div>
          </div>

          <Container className="invoice-form-wrap">
            <div style={{ padding: 20 }}>
              <Row style={{ justifyContent: "center" }}>
                <img className="logo" src={Logo} alt="" />
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <h3 style={{ justifyContent: "center", display: "flex" }}>
                  Car Rental Invoice
                </h3>
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Col className="col-md-6 col-lg-6">
                  <p style={{ fontWeight: "bold" }}> Billed To </p>
                  <p>{userName}</p>
                  <p>{invoiceDetailData.billaddress}</p>
                  <p>{invoiceDetailData.useremail}</p>
                  <p>{invoiceDetailData.billphone}</p>
                </Col>
                <Col className="col-md-6 col-lg-6 invoice-col-css">
                  <p style={{ fontWeight: "bold" }}> INFO </p>
                  <p>Invoice : {invoiceDetailData.useremail}</p>
                  <p>Invoice Date : {invoiceDetailData.invoice_date}</p>
                </Col>
              </Row>

              <Row style={{ marginTop: 20, marginLeft: 0, marginRight: 0 }}>
                <Table bordered hover id="table_id" className="data-table">
                  <thead className="data-table-thead ">
                    <tr style={{ textAlign: "center" }}>
                      <th>No .</th>
                      <th>Modal Name</th>
                      <th>Duration</th>
                      <th>Price (SGD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ height: "300px", textAlign: "center" }}>
                      <td>{invoiceDetailData.ivoid}</td>
                      <td>{invoiceDetailData.modelname}</td>
                      <td>{invoiceDetailData.bookingduration}</td>
                      <td>{invoiceDetailData.subscription_price}</td>
                    </tr>
                    <tr>
                      <td
                        colSpan="3"
                        style={{ textAlign: "end", fontWeight: "bold" }}
                      >
                        Total Amount
                      </td>
                      <td style={{ textAlign: "center", fontWeight: "bold" }}>
                        {invoiceDetailData.totalamt}
                      </td>
                    </tr>
                    {invoiceDetailData.delivery_remark !== "" && (
                      <tr style={{ textAlign: "center" }}>
                        <td colSpan="4">{invoiceDetailData.delivery_remark}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default InvoiceDetail;
