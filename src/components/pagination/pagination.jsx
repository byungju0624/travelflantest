import React from "react";
import "./pagination.scss";
const Pagination = ({ dataPerPage, paginate, totalData }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination_Container">
          {pageNumber.map((number) => (
            <li key={number}>
              <div
                onClick={() => paginate(number)}
                className="pagination_Number"
              >
                {number}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
