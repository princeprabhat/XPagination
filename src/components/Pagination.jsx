import React, { useState } from "react";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="pagination-container">
      <button>Previous</button>
      <div className="page-no">{activePage}</div>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
