import React, { useState } from "react";
import Inputcomponent from "./Inputcomponent";
import Table from "./Table";

function Main() {
  const [formdata, setformdata] = useState({
    order: "",
    pendingorder: "",
    completeorder: "",
  });

  const [order, setorder] = useState([]);
  const [pendingorder, setpendingorder] = useState([]);
  const [completeorder, setcompleteorder] = useState([]);

  const handlechange = (event) => {
    setformdata((prevstate) => ({
      ...prevstate,
      [event.target.id]: event.target.value,
    }));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    // console.log(formdata);
    // console.log("orders", order);
    // console.log("pending orders", pendingorder);
    // console.log("complete orders", completeorder);

    if (formdata.order !== "") {
      setorder((current) => [...current, formdata.order]);
    }
    if (formdata.pendingorder !== "") {
      setpendingorder((current) => [...current, formdata.pendingorder]);
    }
    if (formdata.completeorder !== "") {
      setcompleteorder((current) => [...current, formdata.completeorder]);
    }
  };

  return (
    <div style={{ margin: "40px", padding: "13px", border: "2px solid blue" }}>
      <form onSubmit={handlesubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Inputcomponent
            placeholder={"order"}
            onmutate={handlechange}
            value={formdata.order}
            id={"order"}
          />
          <Inputcomponent
            placeholder={"pending order"}
            value={formdata.pendingorder}
            onmutate={handlechange}
            id={"pendingorder"}
          />
          <Inputcomponent
            placeholder={"completed order"}
            value={formdata.completeorder}
            onmutate={handlechange}
            id={"completeorder"}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <Table data={{ order, pendingorder, completeorder }} />
    </div>
  );
}

export default Main;
