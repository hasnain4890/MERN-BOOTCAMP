import React from "react";

const Child = (props) => {
  console.log("props data", props.parentData);
  return (
    <div>
      {props.parentData.map((parentD, idx) => {
        return (
          <div key={idx}>
            <h3>Father Detail:</h3>
            <li>{parentD.fatherName.name}</li>
            <li>age: {parentD.fatherName.age}</li>
            <li>occupation: {parentD.fatherName.occupation}</li>

            <h3>Mother Detail:</h3>
            <li>{parentD.motherName.name}</li>
            <li>age: {parentD.motherName.age}</li>
            <li>occupation: {parentD.motherName.occupation}</li>

            <h5>Kids</h5>
            {parentD.childs.map((kid, idx) => {
              return (
                <div key={idx}>
                  <li>child name: {kid.name}</li>
                  <li>child occupation: {kid.occupation}</li>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Child;
