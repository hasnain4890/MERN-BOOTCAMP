import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import Home from "../login/Home";
import Post from "../12_17_2022/Post";
import User_details from "../12_17_2022/User_details";
import AppLayout from "../layout/AppLayout";
import Profile from "../../17_nov_assignment_3/pages/Profile";
import Task from "../../24_12_2022/pages/Task";
import Task2 from "../../24_12_2022/pages/Task2";
import ShiftMOde from "../../24_12_2022/pages/ShiftMOde";
import Validation from "../../24_12_2022/pages/Validation";
import DogApi from "../../24_12_2022/pages/DogApi";
import Counter_task from "../../25_dec_2022/pages/Counter_task";

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

        {/* 24 dec tasks */}
        <Route path="/Task" element={<Task />} />
        <Route path="/" element={<Task2 />} />
        {/* <Route path="/" element={<ShiftMOde />} /> */}
        {/* <Route path="/" element={<Validation />} /> */}
        {/* <Route path="/" element={<DogApi />} /> */}

        {/* 25 dec tasks */}

        {/* {<Route path="/" element={<Counter_task />} />} */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
