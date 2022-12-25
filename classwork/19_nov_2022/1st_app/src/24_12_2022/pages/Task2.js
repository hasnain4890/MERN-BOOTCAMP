import React, { useState } from "react";

function Task2() {
  const [bgcolor, setbgcolor] = useState("#fff");

  const colorsArray = [
    {
      id: 1,
      color: "Green",
      hexcode: "#324323",
    },
    {
      id: 2,
      color: "pink",
      hexcode: "#875384",
    },
    {
      id: 3,
      color: "Green",
      hexcode: "#877384",
    },
    {
      id: 4,
      color: "blue",
      hexcode: "#173784",
    },
    {
      id: 5,
      color: "blue",
      hexcode: "#000",
    },
    {
      id: 5,
      color: "blue",
      hexcode: "#847548",
    },
  ];
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="flex w-screen h-screen flex-wrap "
    >
      {colorsArray.map((color) => {
        return (
          <div className="flex">
            <div
              onClick={() => setbgcolor(color.hexcode)}
              className="p-2 m-2 w-80 h-40 border-black border-4 rounded-lg gap-2"
              style={{ background: color.hexcode }}
            >
              <li className="flex justify-center p-5 font-bold text-slate-50">
                color : {color.color}
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task2;
