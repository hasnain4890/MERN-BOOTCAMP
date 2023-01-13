import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function Task() {
  const [fetchdata, setfetchdata] = useState([]);

  useEffect(() => {
    fetchData1();
  }, []);

  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("http://localhost:5000/cars").then((res) => res.json())
  // );
  // console.log(data);

  // setfetchdata(data);

  const fetchData1 = async () => {
    const { data } = await axios.get("http://localhost:5000/FastFood");
    setfetchdata(data);
    console.log(data);
  };
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  return (
    <div>
      {fetchdata.map((data) => {
        return (
          <div>
            <li>id: {data.id}</li>
            <li>item: {data.item}</li>
            <li>price: {data.price}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
