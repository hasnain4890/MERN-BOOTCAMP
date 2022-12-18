import React from "react";

function Inputcomponent({ type, placeholder, id, value, onchange }) {
  return (
    <div>
      <input
        className="p-2 rounded"
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}

export default Inputcomponent;
