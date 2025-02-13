import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import Pagination from "./Pagination";
const HEADER = ["ID", "Name", "Email", "Role"];
const Home = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setMembersData(apiData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Employee Data Table</h1>
      <div className="membersRow">
        <TableData header={HEADER} data={membersData} />
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
