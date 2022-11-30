import React from "react";
import Child from "./Child";

function Parent() {
  const familyTree = {
    grandParents: {
      grandFather: {
        name: "Naseem gul",
        city: " District, Swabi",
        relation: "Grandfather",
      },
      grandMother: {
        name: "Norania",
        city: "Swabi",
        relation: "Grandmother",
      },
      childrens: [
        {
          parents: {
            father: {
              name: "Abdul Karim",
              city: "Swabi",
              relation: "Father",
            },
            mother: {
              name: "Safoora",
              city: " Swabi , Pakistan",
              relation: "Mother",
            },
            childrens: [
              {
                sister: {
                  name: "Hina",
                  city: " Swabi , Pakistan",
                  relation: "Sister",
                },
                myself: {
                  name: "Hasnain ahmad",
                  city: " Zarobi , pakistan",
                },
                brother: {
                  name: "Zahoor Ahmad",
                  city: " Swabi , Pakistan",
                  relation: "brother",
                },
              },
            ],
          },
          parentsSiblings: {
            aunt: {
              name: "SAIMA",
              city: " swabi pak",
              relation: "Aunt",
            },
            husband: {
              name: "afzaal khan",
              city: " zarobi , pakistan",
              relation: "SAIMA's husband",
            },

            childrens: [
              {
                cousin: {
                  name: " Wifaq ahmad",
                  city: " swabi , pakistan",
                  relation: "SAIMA's daughter(cousin)",
                },
              },
            ],
          },
        },
      ],
    },
  };

  return (
    <div
      style={{
        width: "50%",
        margin: " 0px auto",
        alignText: "center",
        backgroundColor: "teal",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center", color: "wheat" }}>
        Family Tree of NASEEM GUL.
      </h1>
      <Child data={familyTree} />
    </div>
  );
}

export default Parent;
