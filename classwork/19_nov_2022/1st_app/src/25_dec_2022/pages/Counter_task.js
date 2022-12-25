import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Counter_task() {
  const [counter, setcounter] = useState(
    JSON.parse(localStorage.getItem("counter"))
      ? JSON.parse(localStorage.getItem("counter"))
      : 0
  );
  const increment = () => {
    console.log("incre");
    setcounter(counter + 1);
  };
  const decremnet = () => {
    console.log("decre");
    setcounter(counter - 1);
  };
  useEffect(() => {
    JSON.stringify(localStorage.setItem("counter", counter));
  }, [counter]);
  return (
    <div>
      <h1>Counter .. {counter}</h1>
      <Button onClick={increment}>Incremet</Button>
      <Button onClick={decremnet}>decrement</Button>
    </div>
  );
}

export default Counter_task;
