import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShiftMOde() {
  const [toggle, settoggle] = useState(false);

  const lightmode = () => {
    console.log("light");
    settoggle(true);
  };
  const darkmode = () => {
    console.log("dark");
    settoggle(false);
  };
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ background: toggle ? "white" : "black" }}
    >
      <h1>Handle Mode</h1>

      <div className="flex p-2 mt-20">
        <Button onClick={lightmode} className="p-3 m-2">
          Light Mode
        </Button>
        <Button onClick={darkmode} className="p-3 m-2">
          Dark Mode
        </Button>
      </div>
    </div>
  );
}

export default ShiftMOde;
