import React, { useState } from "react";

const Pagination = ({ handlePageChange, activePage }) => {
  return (
    <div className="pagination-container">
      <button onClick={() => handlePageChange("Prev")}>Previous</button>
      <div className="page-no">{activePage + 1}</div>
      <button onClick={() => handlePageChange("Next")}>Next</button>
    </div>
  );
};

export default Pagination;
