import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Validation() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, seterror] = useState("");
  const handlechange = (event) => {
    event.preventDefault();
    console.log("first");
    setformData((prevdata) => ({
      ...prevdata,
      [event.target.id]: event.target.value,
    }));
  };
  const handleform = (event) => {
    event.preventDefault();
    console.log(formData);
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.confirm_password === ""
    ) {
      seterror("no firld should be empty");
      return;
    }
    if (formData.password.length < 8) {
      seterror("password must be greater than 8 ");
      return;
    }
    if (!formData.email.includes("@")) {
      seterror("email must include @");
      return;
    }
    if (formData.password !== formData.confirm_password) {
      seterror("password are not matched");
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleform}>
        <div className="flex flex-col">
          <input
            className="p-3 m-3"
            type="text"
            placeholder="Enter email"
            id="email"
            value={formData.email}
            onChange={handlechange}
          />
          <input
            className="p-3 m-3"
            type="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handlechange}
          />
          <input
            className="p-3 m-3"
            type="password"
            id="confirm_password"
            placeholder="Enter confirm password"
            value={formData.confirm_password}
            onChange={handlechange}
          />
          <Button type="submit">submit</Button>
        </div>
      </form>
      <div>{error}</div>
    </>
  );
}

export default Validation;
