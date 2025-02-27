import React from "react";

const TableData = ({ header, data, start, end }) => {
  return (
    <table>
      <thead>
        <tr>
          {header &&
            header.map((el, idx) => {
              return <th key={idx}>{el}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.slice(start, end).map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.role}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableData;
