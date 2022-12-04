import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";

function Main() {
  const [userdata, setuserdata] = useState({
    gender: "male",
    height: "",
    heightunit: "",

    weight: "",
    weightunit: "",
    age: "",
  });
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("first");
  };

  const onmutate = (event) => {
    console.log(event.target.value);
  };
  return (
    <div style={{ width: "50%", margin: "0px auto", background: "gray" }}>
      <div>
        <h2>BMI CALCULATOR</h2>
      </div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Gender</label>
          <br></br>
          <select
            name="gender"
            id="gender"
            onChange={onmutate}
            defaultValue={true}
          >
            <option value="male">Male</option>
            <option value="female">FeMale</option>
            <option value="others">others</option>
          </select>
        </div>
        <div>
          <label>Height</label>
          <br></br>
          <input type="text" id="height" />
          <select name="heightunit" id="heightunit" onChange={onmutate}>
            <option value="inches" defaultValue={true}>
              Inches
            </option>
            <option value="centimeter">Centimeters</option>
          </select>
        </div>
        <div>
          <label>Weight</label>
          <br></br>
          <input type="text" id="height" />
          <select name="weightunit" id="weightunit" onChange={onmutate}>
            <option value="kg">KG</option>
            <option value="lb" defaultValue={true}>
              lb
            </option>
          </select>
        </div>
        <div>
          <label>Age</label>
          <br></br>
          <input type={"number"} id={"age"} onChange={onmutate} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Main;
