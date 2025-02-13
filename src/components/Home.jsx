import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import Pagination from "./Pagination";
const HEADER = ["ID", "Name", "Email", "Role"];
const PAGE_SIZE = 10;
const Home = () => {
  const [membersData, setMembersData] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const numberOfPages = Math.ceil(membersData.length / PAGE_SIZE);
  const start = PAGE_SIZE * activePage;
  const end = start + PAGE_SIZE;
  Math.ceil(membersData.length / PAGE_SIZE);
  // useEffect(() => {
  //   setPaginationData(membersData.slice(start, end));
  // }, [activePage]);

  const handlePageChange = (action) => {
    if (action === "Prev" && activePage + 1 > 1) {
      setActivePage((prev) => prev - 1);
    }
    if (action === "Next" && activePage + 1 < numberOfPages) {
      setActivePage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setMembersData(apiData.data);
      } catch (error) {
        console.error("failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Employee Data Table</h1>
      <div className="membersRow">
        <TableData header={HEADER} data={membersData} start={start} end={end} />
      </div>
      <Pagination handlePageChange={handlePageChange} activePage={activePage} />
    </div>
  );
};

export default Home;
