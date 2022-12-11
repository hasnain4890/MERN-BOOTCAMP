import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import Home from "../login/Home";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
