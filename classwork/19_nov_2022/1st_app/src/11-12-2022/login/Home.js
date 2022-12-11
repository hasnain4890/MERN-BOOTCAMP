import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase-config";

function Home() {
  const navigate = useNavigate();
  const handlesignout = async () => {
    await signOut(auth);
    navigate("/LoginPage");
  };
  return (
    <div>
      <h1> welcome to Home Page</h1>
      <button onClick={handlesignout} className=" bg-red-600 rounded">
        Sign out
      </button>
    </div>
  );
}

export default Home;
