import React from "react";

export default function Radiobutton() {
  return (
    <div>
      <div>
        <h1>satisfied</h1>
        <input type="radio" name="drone" checked />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" name="drone" />
        <label>No</label>
      </div>
    </div>
  );
}
