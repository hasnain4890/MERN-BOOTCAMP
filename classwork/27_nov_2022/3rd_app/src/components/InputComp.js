import React from "react";

const InputComp = ({ placeholder, name, changeHandler }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      onChange={(event) => changeHandler(event)}
    />
  );
};

export default InputComp;
