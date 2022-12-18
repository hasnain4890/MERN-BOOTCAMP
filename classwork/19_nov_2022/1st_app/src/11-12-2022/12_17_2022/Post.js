import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Post() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);

  const handleRoute = (id) => {
    console.log(id);
    console.log("first");
    navigate(`/User_details/${id}`);
  };

  return (
    <main>
      <h1 className="text-white">User List</h1>
      <h1>Fetch Data from Api in React</h1>
      <ol>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <div key={index} className="mt-6">
              <li
                className="bg-green-600 p-4 m-1 font-bold"
                onClick={() => handleRoute(userObj.id)}
              >
                Title: {userObj.name}
              </li>
              <Button
                className="w-200 h-10 flex-shrink mb-2"
                onClick={() => handleRoute(userObj.id)}
                style={{ color: "green" }}
              >
                Details
              </Button>
              <br></br>
            </div>
          ))}
      </ol>
    </main>
  );
}

export default Post;

// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setUser(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// useEffect(() => {
//   fetchData();
// }, []);
