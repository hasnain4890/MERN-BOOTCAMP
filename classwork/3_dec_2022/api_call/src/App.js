import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const getUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <h1>user details</h1>
      {data.map((el) => {
        return (
          <div>
            <h1>name : {el.name}</h1>
            <h1>username : {el.username}</h1>

            <h1>email: {el.email}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
