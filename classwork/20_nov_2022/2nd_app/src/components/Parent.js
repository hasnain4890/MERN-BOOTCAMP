import React from "react";
import Child from "./Child";

const Parent = () => {
  const parentData = [
    {
      fatherName: {
        name: "Mohammad Munir",
        age: 50,
        occupation: "xyz",
      },
      motherName: {
        name: "abc",
        age: 45,
        occupation: "House Wife",
      },
      childs: [
        {
          name: "Mansoor Abbas",
          age: 23,
          occupation: "Polic Officer",
        },
        {
          name: "Ghulam Abbas",
          age: 30,
          occupation: "Software Engineer",
        },
      ],
    },
    {
      fatherName: {
        name: "Joe",
        age: 66,
        occupation: "xyz",
      },
      motherName: {
        name: "asdf",
        age: 44,
        occupation: "House Wife",
      },
      childs: [
        {
          name: "Salman Abbas",
          age: 23,
          occupation: "Accountant",
        },
        {
          name: "Saleem Abbas",
          age: 30,
          occupation: "IT Officer",
        },
      ],
    },
  ];

  return (
    <>
      <h2>Parent Detail</h2>
      <Child parentData={parentData} />
    </>
  );
};

export default Parent;
