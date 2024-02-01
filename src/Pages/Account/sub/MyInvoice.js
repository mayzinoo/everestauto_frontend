//Libraries
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Table, Button } from "react-bootstrap";
//CSS
import "../components/styles/myinvoice.css";
import { FaEye } from "react-icons/fa";
//API
import { InvoiceApi } from "../../../api/Api";

function MyInvoice(props) {
  const [userDetails, setUserDetails] = useState({ id: "" });
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));
    if (userDetails.id !== "") {
      InvoiceApi({ _data: { uid: userDetails.id } })
        .then((invoiceData) => {
          setInvoiceData(invoiceData);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [userDetails.id, props.GetUserApi]);

  return (
    <Fragment>
      <div className="main-content">
        <div className="myinvoice">
          <div className="row" style={{ display: "flex" }}>
            <p className="sub-title">Invoice List</p>
          </div>

          <Container className="invoice-form-wrap">
            {invoiceData.length > 0 ? (
              <div style={{ padding: 20 }}>
                <Row>
                  <Table bordered hover id="table_id" className="data-table">
                    <thead className="data-table-thead ">
                      <tr style={{ textAlign: "center" }}>
                        <th>#</th>
                        <th>Invoice No</th>
                        <th>Total Amount</th>
                        <th>Invoice Date</th>
                        <th>Delivery Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.map((invoice, index) => (
                        <tr key={index} style={{ textAlign: "center" }}>
                          <td style={{ paddingTop: "11px" }}>{invoice.id}</td>
                          <td style={{ paddingTop: "11px" }}>
                            {invoice.ivoid}
                          </td>
                          <td style={{ paddingTop: "11px" }}>
                            {invoice.totalamt}
                          </td>
                          <td style={{ paddingTop: "11px" }}>
                            {invoice.invoice_date}
                          </td>
                          <td style={{ paddingTop: "11px" }}>
                            {invoice.delivery_date}
                          </td>
                          <td
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <Button
                              type="button"
                              className="viewicon-btn"
                              href={`/account/invoicedetail/${invoice.id}`}
                            >
                              <FaEye className="view-icon-css" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </div>
            ) : (
              <div>
                <p className="no-data-css"> No Record Data Found !</p>
              </div>
            )}
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});
export default connect(mapStateToProp)(MyInvoice);
