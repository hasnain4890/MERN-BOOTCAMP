import React from "react";

function Task2() {
  const colorsArray = [
    {
      id: 1,
      color: "red",
      hexcode: "#324323",
    },
    {
      id: 2,
      color: "pink",
      hexcode: "#875384",
    },
    {
      id: 3,
      color: "green",
      hexcode: "#877384",
    },
    {
      id: 4,
      color: "blue",
      hexcode: "#173784",
    },
  ];
  return (
    <div>
      <h1>colors Array</h1>
      {colorsArray.map((color) => {
        return (
          <div>
            <div
              className="p-3 m-4 w-80 h-40"
              style={{ background: color.hexcode }}
            >
              <li>id : {color.id}</li>
              <li>color : {color.color}</li>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task2;
