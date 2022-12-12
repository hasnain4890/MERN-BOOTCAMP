import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
  googleProvider,
  signInWithPopup,
  auth,
} from "../services/Firebase-config";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formvalues, setformvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(formvalues);
    navigate("/");
  };

  const handlegoogleauth = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    console.log(user);
    if (user) {
      navigate("/");
    }
  };
  return (
    <div className="bg-slate-600 w-screen h-screen">
      <h1 className="text-orange-500 p-5">Login page</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <input
            className="p-3 m-2 rounded"
            placeholder="enter name"
            type="text"
            required
            //   onChange={(event) => ({ ...formvalues, name: event.target.value })}
            onChange={(event) => {
              setformvalues({ ...formvalues, name: event.target.value });
            }}
            value={formvalues.name}
            id="name"
          />{" "}
        </div>
        <div>
          <input
            className="p-3 m-2 rounded"
            placeholder="enter email"
            type="email"
            id="email"
            onChange={(event) => {
              setformvalues({ ...formvalues, email: event.target.value });
            }}
            value={formvalues.email}
            required
          />
        </div>

        <div>
          <input
            className="p-3 m-2 rounded"
            placeholder="enter password"
            type="password"
            id="password"
            onChange={(event) => {
              setformvalues({ ...formvalues, password: event.target.value });
            }}
            value={formvalues.password}
            required
          />
        </div>

        <input
          className="bg-white rounded-md m-4 p-2 w-56 h-15"
          type="submit"
        />
      </form>
      <div>
        <button
          className="bg-white rounded-md m-4 p-2 w-56 "
          onClick={handlegoogleauth}
        >
          Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
