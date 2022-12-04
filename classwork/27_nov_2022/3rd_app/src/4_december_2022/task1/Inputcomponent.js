import React from "react";

function Inputcomponent({ placeholder, value, onmutate, id }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onmutate}
        id={id}
        style={{ padding: "6px", width: "320px" }}
      />
    </div>
  );
}

export default Inputcomponent;
