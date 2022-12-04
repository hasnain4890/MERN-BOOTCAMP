import React, { Component, useState } from "react";
import InputComp from "./components/InputComp";
import Title from "./components/Title";
//import Main from "./4_december_2022/task1/Main";
import Main from "./4_december_2022/task2/Main";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

// task 1
// const App = () => {
//   let [counter, setCounter] = useState(0);
//   const handleClick = (param) => {
//     if (param === "inc") setCounter(counter + 1);
//     else if (param === "dec") setCounter(counter - 1);
//     else if (param === "reset") setCounter(0);
//   };

//   return (
//     <div>
//       <h1>{counter === 0 ? "zero" : counter}</h1>
//       <button onClick={() => handleClick("inc")}>increment</button>
//       <button onClick={() => handleClick("dec")}>decrement</button>
//       <button onClick={() => handleClick("reset")}>decrement</button>
//     </div>
//   );
// };

// task 2
// class App extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 0 };
//   }
//   handleClick = (param) => {
//     if (param === "inc") this.setState({ counter: this.state.counter + 1 });
//     else if (param === "dec")
//       this.setState({ counter: this.state.counter - 1 });
//     else if (param === "reset") this.setState({ counter: 0 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter === 0 ? "zero" : this.state.counter}</h1>
//         <button onClick={() => this.handleClick("inc")}>increment</button>
//         <button onClick={() => this.handleClick("dec")}>decrement</button>
//         <button onClick={() => this.handleClick("reset")}>decrement</button>
//       </div>
//     );
//   }
// }

// task 3
// function App() {
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "",
//   });

//   const handleClick = () => {
//     console.log("state", state);
//   };

//   const changeHandler = (event) =>
//     setState({ ...state, [event.target.name]: event.target.value });

//   return (
//     <div>
//       <h1>User Form</h1>
//       <form action="" onSubmit={(e) => e.preventDefault()}>
//         <InputComp
//           placeholder="fist name"
//           name="firstName"
//           changeHandler={changeHandler}
//         />
//         <InputComp
//           placeholder="last name"
//           name="lastName"
//           changeHandler={changeHandler}
//         />
//         <InputComp
//           placeholder="email"
//           name="email"
//           changeHandler={changeHandler}
//         />
//         <InputComp placeholder="age" name="age" changeHandler={changeHandler} />

//         <button onClick={() => handleClick()}>click me</button>
//       </form>
//     </div>
//   );
// }
