/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = (props) => {
  const { vehiclesPerPage, totalVehicles, paginate, nextPage, prevPage } =
    props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVehicles / vehiclesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ marginBottom: "70px" }}>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => prevPage()}>
            Previous
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a onClick={() => paginate(num)} href="#" className="page-link">
              {num}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;