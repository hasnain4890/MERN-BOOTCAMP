import React from "react";
import { useEffect } from "react";
import Tablecolumncom from "./Tablecolumncom";

function Table({ data }) {
  //   useEffect(() => {
  //     console.log(data);
  //   });
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Tablecolumncom tableheading={"order"} datalist={data.order} />
      <Tablecolumncom
        tableheading={"pending orders"}
        datalist={data.pendingorder}
      />
      <Tablecolumncom
        tableheading={"completeorder"}
        datalist={data.completeorder}
      />
    </div>
  );
}

export default Table;
