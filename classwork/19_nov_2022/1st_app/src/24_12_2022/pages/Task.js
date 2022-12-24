import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function Task() {
  const [fetchdata, setfetchdata] = useState(null);

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:5000/cars").then((res) => res.json())
  );
  console.log(data);

  // setfetchdata(data);

  // const fetchData = async () => {
  //   const { data } = await axios.get("http://localhost:5000/cars");
  //   setdata(data);
  // };
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.map((data) => {
        return (
          <div>
            <li>id: {data.id}</li>
            <li>brand: {data.brand}</li>
            <li>model: {data.model}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
