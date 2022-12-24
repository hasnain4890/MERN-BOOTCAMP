import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function DogApi() {
  const [fetchdata, setfetchdata] = useState("");

  useEffect(() => {
    DogApi();
  }, []);

  const handlechange = () => {
    DogApi();
  };

  const DogApi = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setfetchdata(data);
    console.log(data);
  };
  return (
    <div className="">
      <div>
        <h1>Goggy Doggy</h1>
      </div>
      <div className="w-76 h-56 flex justify-center">
        {fetchdata && <div>{<img src={fetchdata.message} />}</div>}
      </div>
      <div>
        <Button onClick={handlechange}>change image</Button>
      </div>
    </div>
  );
}

export default DogApi;
