import React from "react";

function child(props) {
  const { grandFather, grandMother, childrens } = props.data.grandParents;
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid red",
        margin: "20px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            backgroundColor: "#039BE5",
            margin: "10px",
            padding: "10px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <h4>{grandFather.relation}</h4>
          <p>{grandFather.name}</p>
          <p>{grandFather.city}</p>
        </div>
        <div
          style={{
            backgroundColor: "#d17e00",
            margin: "10px",
            padding: "10px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <h4>{grandMother.relation}</h4>
          <p>{grandMother.name}</p>
          <p>{grandMother.city}</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "goldenrod 2px solid",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                backgroundColor: "#039BE5",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parents.father.relation}</h4>
              <p>{childrens[0].parents.father.name}</p>
              <p>{childrens[0].parents.father.city}</p>
            </div>
            <div
              style={{
                backgroundColor: "#d17e00",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parents.mother.relation}</h4>
              <p>{childrens[0].parents.mother.name}</p>
              <p>{childrens[0].parents.mother.city}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                backgroundColor: "#039BE5",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parents.childrens[0].sister.relation}</h4>
              <p>{childrens[0].parents.childrens[0].sister.name}</p>
              <p>{childrens[0].parents.childrens[0].sister.city}</p>
            </div>
            <div
              style={{
                backgroundColor: "wheat",
                margin: "10px",
                padding: "10px",
                color: "",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parents.childrens[0].brother.relation}</h4>
              <p>{childrens[0].parents.childrens[0].brother.name}</p>
              <p>{childrens[0].parents.childrens[0].brother.city}</p>
            </div>
            <div
              style={{
                backgroundColor: "wheat",
                margin: "10px",
                padding: "10px",
                color: "",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parents.childrens[0].myself.relation}</h4>
              <p>{childrens[0].parents.childrens[0].myself.name}</p>
              <p>{childrens[0].parents.childrens[0].myself.city}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "goldenrod 2px solid",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                backgroundColor: "#d17e00",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parentsSiblings.aunt.relation}</h4>
              <p>{childrens[0].parentsSiblings.aunt.name}</p>
              <p>{childrens[0].parentsSiblings.aunt.city}</p>
            </div>
            <div
              style={{
                backgroundColor: "#039BE5",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>{childrens[0].parentsSiblings.husband.relation}</h4>
              <p>{childrens[0].parentsSiblings.husband.name}</p>
              <p>{childrens[0].parentsSiblings.husband.city}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                backgroundColor: "#d17e00",
                margin: "10px",
                padding: "10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <h4>
                {childrens[0].parentsSiblings.childrens[0].cousin.relation}
              </h4>
              <p>{childrens[0].parentsSiblings.childrens[0].cousin.name}</p>
              <p>{childrens[0].parentsSiblings.childrens[0].cousin.city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default child;
