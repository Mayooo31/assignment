import React from "react";

const TableHead = ({ data, space }) => {
  return (
    <thead
      style={{
        position: "relative",
        left: `${space}px`,
      }}
    >
      <tr>
        <th></th>
        {data.map((title) => {
          return <th key={title}>{title}</th>;
        })}
        <th>delete</th>
      </tr>
    </thead>
  );
};

export default TableHead;
