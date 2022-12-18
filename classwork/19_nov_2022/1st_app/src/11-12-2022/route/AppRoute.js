import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import Home from "../login/Home";
import Post from "../12_17_2022/Post";
import User_details from "../12_17_2022/User_details";
import AppLayout from "../layout/AppLayout";
import Profile from "../../17_nov_assignment_3/pages/Profile";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AppLayout />}>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/user_details/:id" element={<User_details />} />
        </Route> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
