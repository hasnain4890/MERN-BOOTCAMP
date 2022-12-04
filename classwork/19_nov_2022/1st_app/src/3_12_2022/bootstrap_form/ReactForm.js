import React from "react";
import Form from "react-bootstrap/Form";
import { usestate } from "react";

import Inputcomponent from "./Inputcomponent";
import Radiobutton from "./Radiobutton";
import Textarea from "./Textarea";
import Button from "./Button";

const [data, setdata] = usestate({
  dev_name: "",
  user_name: "",
  address: "",
  email: "",
  password: "",
  feedback: "",
  satisfied: "",
});

const handlechange = (event) => {
  setdata((prevState) => ({
    ...prevState,
    [event.target.id]: event.target.value,
  }));
};

function ReactForm() {
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Inputcomponent
          type="text"
          placeholder="developers name"
          id={"dev_name"}
          handlechange={handlechange}
        />
        <Inputcomponent type="text" placeholder="address" id={"address"} />
        <Inputcomponent type="text" placeholder="username" id={"user_name"} />
        <Inputcomponent type="email" placeholder="email" id={"email"} />
        <Inputcomponent
          type="password"
          placeholder="password"
          id={"password"}
        />

        <Textarea />
        <Radiobutton />
        <Button />
      </form>
    </div>
  );
}

export default ReactForm;
