import React from "react";

export default function Inputcomponent({ type, placeholder, handlechange }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={handlechange} />
    </div>
  );
}
