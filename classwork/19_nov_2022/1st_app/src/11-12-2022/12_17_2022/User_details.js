import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function User_details() {
  const userId = useParams();
  console.log(userId);
  const [getUser, setGetUser] = useState();
  const navigate = useNavigate();
  // const [getUser,setGetUser]=useState();

  const get_user = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId.id}`
      );
      const res = await data.json();
      console.log(res);
      setGetUser(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_user();
  }, []);

  return (
    <div>
      <h1>Welcome to User details</h1>
      {getUser ? (
        <div>
          {
            <div className="flex-col text-lg text-lime-400 ">
              <li>{getUser.name}</li>
              <li> {getUser.email}</li>
              <li>{getUser.website}</li>
              <li>{getUser.company.name}</li>
            </div>
          }
        </div>
      ) : (
        <div>loading.... </div>
      )}
    </div>
  );
}

export default User_details;
