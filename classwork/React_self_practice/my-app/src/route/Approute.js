import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../component/Counter";
import Registration from "../component/Registration";
import Userlist from "../component/Userlist";

function Approute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approute;
