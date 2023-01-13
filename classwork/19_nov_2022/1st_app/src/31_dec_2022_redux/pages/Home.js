import React, { useEffect, useState } from "react";
import axios from "axios";
import { async } from "@firebase/util";

function Home() {
  const [datalist, setdatalist] = useState(null);

  const FetchData = async () => {
    const { data } = await axios("http://localhost:5000/FastFood");
    setdatalist(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  if (!datalist) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <header className="bg-teal-400 p-3">
        <nav className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-2xl">FooDish</p>
          </div>
          <div>
            <button>Cart</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="p-3 text-2xl text-blue-800">
          <div>
            <p> Food List</p>
          </div>
          <div className="grid grid-cols-2">
            {datalist.map((data) => {
              return (
                <div className="" key={data.id}>
                  <img className="w-50 rounded-lg" src={data.img} />
                  <div className="flex p-1 m-1 gap-3">
                    <div>
                      <p>{data.price} rs</p>
                    </div>
                    <div>
                      <p>{data.item} </p>
                    </div>
                    <div className="">
                      <button className="rounded-lg bg-black p-1.5">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
