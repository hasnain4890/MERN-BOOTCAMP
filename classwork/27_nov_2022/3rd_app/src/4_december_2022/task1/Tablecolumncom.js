import React from "react";
import { useEffect } from "react";

function Tablecolumncom({ tableheading, datalist }) {
  useEffect(() => {
    console.log(datalist);
  }, []);
  return (
    <div>
      <h2>{tableheading}</h2>
      <div style={{ border: "2px solid green" }}>
        {datalist.length == 0 ? (
          <h5>no data</h5>
        ) : (
          <div>
            {datalist.map((item, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <p>{index + 1}:</p>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tablecolumncom;
