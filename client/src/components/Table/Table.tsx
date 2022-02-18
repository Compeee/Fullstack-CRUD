import React from "react";
import { TableItems } from "./TableItems";
import "./Table.css";
export const Table: React.FC = () => {
  return (
    <table className="people-table">
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Age</th>
        </tr>
      </thead>
      <TableItems></TableItems>
    </table>
  );
};
