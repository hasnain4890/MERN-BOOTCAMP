import React from "react";
import Inputcomponent from "../components/Inputcomponent";
import prifileimg from "../asset/OIP.jpg";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Profile() {
  const [profilepic, setprofilepic] = useState("");
  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    qualification: "",
    country: "",
    city: "",
  });

  const onMutate = (event) => {
    setuserData((preData) => ({
      ...preData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleReset = (event) => {
    setuserData((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      email: "",
      qualification: "",
      country: "",
      city: "",
    }));
    setprofilepic("");
  };
  const handleProfileImage = (event) => {
    console.log("first");
    setprofilepic(event.target.files[0]);
  };
  return (
    <div className="grid grid-cols-4 m-8">
      <div className="col-span-1 bg-slate-300 p-4">
        <div>
          <input
            type="file"
            name="imageInput"
            id="imageInput"
            className="hidden"
            onChange={handleProfileImage}
          />
          <label htmlFor="imageInput">
            <img
              src={
                profilepic == "" ? prifileimg : URL.createObjectURL(profilepic)
              }
              className="rounded-lg"
            />
          </label>
        </div>
        <div>
          <p>{userData.firstName === "" ? "First Name" : userData.firstName}</p>
        </div>
        <div>
          <p>{userData.lastName === "" ? "Last Name" : userData.lastName}</p>
        </div>
        <div>
          <p>{userData.email === "" ? "Email" : userData.email}</p>
        </div>
        <div>
          <p>
            {userData.qualification === ""
              ? "Qualofication"
              : userData.qualification}
          </p>
        </div>
        <div>
          <p>{userData.country === "" ? "Country" : userData.country}</p>
        </div>
        <div>
          <p>{userData.city === "" ? "City" : userData.city}</p>
        </div>
      </div>

      <div className="col-span-2 bg-slate-500 p-8">
        <div>
          <p className="text-lg font-bold ">Profile</p>
        </div>
        <div className="flex my-2 gap-2">
          <Inputcomponent
            type="text"
            placeholder="First Name"
            id="firstName"
            value={userData.firstName}
            onchange={onMutate}
          />
          <Inputcomponent
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={userData.lastName}
            onchange={onMutate}
          />
        </div>
        <div className="flex my-2 gap-2">
          <Inputcomponent
            type="text"
            placeholder="Email"
            id="email"
            value={userData.email}
            onchange={onMutate}
          />
          <Inputcomponent
            type="text"
            placeholder="qualification"
            id="qualification"
            value={userData.qualification}
            onchange={onMutate}
          />
        </div>
        <div className="flex my-2 gap-2">
          <Inputcomponent
            type="text"
            placeholder="Name"
            id="country"
            value={userData.country}
            onchange={onMutate}
          />
          <Inputcomponent
            type="text"
            placeholder="email"
            id="city"
            value={userData.city}
            onchange={onMutate}
          />
        </div>
        <div>
          <Button
            style={{
              margin: "16px",
              padding: "15px",
              float: "left",
              width: "120px",
            }}
            onClick={handleReset}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

// import React, { useEffect, useRef, useState } from "react";
// // import Preview from "./Preview";

// const Profile = () => {
//   const fileRef = useRef(null);
//   const [PreviewImg, setPreviewImg] = useState(null);
//   const reader = new FileReader();

//   // const [first, setfirst] = useState(second)
//   // const [value, onChange] = React.useState(new Date());
//   const [User, setUser] = useState({
//     firstName: "",
//     cnic: null,
//     Contact: null,
//     email: "",
//     Address: "",
//     Gender: "",
//     Reason: "",
//     Religious: "",
//     lastName: "",
//     DoB: null,
//     imagePath: null,
//   });
//   useEffect(() => {
//     // event.preventDefault();
//     HandleSubmit();
//   }, []);

//   const HandleSubmit = () => {
//     // event.preventDefault();
//     console.log(User.imagePath);
//   };

//   const HandleReset = () => {
//     setUser({
//       firstName: "",
//       cnic: null,
//       Contact: null,
//       email: "",
//       Address: "",
//       Gender: "",
//       Reason: "",
//       Religious: "",
//       lastName: "",
//       DoB: null,
//       imagePath: null,
//     });
//   };

//   return (
//     <>
//       <form onSubmit={HandleSubmit}>
//         <div className="row">
//           <div
//             className="col-sm-3 text-center"
//             style={{ backgroundColor: "lightgray" }}
//           >
//             <div className="col my-3 mx-5">
//               <input
//                 hidden
//                 type="file"
//                 ref={fileRef}
//                 onChange={(e) => {
//                   e.preventDefault();

//                   console.log(e.target.files[0]);
//                   setUser({ ...User, imagePath: e.target.value });
//                   reader.readAsDataURL(e.target.files[0]);
//                   reader.onload = () => {
//                     console.log("File start...");
//                     // setPreviewImg(reader.result);
//                     setUser({ ...User, imagePath: reader.result });
//                   };
//                   // console.log("Path Checked:", PreviewImg);
//                 }}
//               />

//               <button
//                 // type="button"
//                 className="btn btn-btn-outline-light"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   fileRef.current.click();
//                 }}
//               >
//                 {User.imagePath ? (
//                   // PreviewImg ? (
//                   <img
//                     class="rounded-circle shadow-4-strong"
//                     src={User.imagePath}
//                     alt="Profile Picture"
//                     width="150px"
//                     height="150px"
//                   />
//                 ) : (
//                   <img
//                     class="rounded-circle shadow-4-strong"
//                     src="https://cdn.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.webp"
//                     alt="Profile Picture"
//                     width="150px"
//                     height="150px"
//                   />
//                 )}
//               </button>
//             </div>
//             {User.imagePath} <br />
//             {/* {PreviewImg} <br /> */}
//             {User.firstName} <br />
//             {User.lastName} <br />
//             {User.cnic} <br />
//             {User.Contact} <br />
//             {User.email} <br />
//             {User.DoB} <br />
//             {User.Address} <br />
//             {User.Gender} <br />
//             {User.Religious}
//             {User.Reason} <br />
//           </div>
//           <div className="col-sm-9 text-bg-dark">
//             <h2 className="text-center my-3">Create Profile</h2>
//             <div className="row">
//               <div className="col-sm-4 mx-5 my-3">
//                 <div>
//                   <label htmlFor="FirstName" className="text-info">
//                     First Name
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     name="FirstName"
//                     class="form-control"
//                     id="FirstName"
//                     placeholder="Enter Your First Name"
//                     onChange={(e) => {
//                       setUser({ ...User, firstName: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label htmlFor="FirstName" className="text-info">
//                     CNIC
//                   </label>
//                   <br />
//                   <input
//                     type="number"
//                     class="form-control"
//                     minLength={12}
//                     maxLength={17}
//                     name="CNIC"
//                     id="CNIC"
//                     placeholder="Enter Your CNIC"
//                     onChange={(e) => {
//                       setUser({ ...User, cnic: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <br />
//                 <div class="mb-3">
//                   <label className="text-info">Email address</label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="name@example.com"
//                     onChange={(e) => {
//                       setUser({ ...User, email: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <div class="mb-3">
//                   <label for="exampleFormControlInput1" className="text-info">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="Enter Your Address"
//                     onChange={(e) => {
//                       setUser({ ...User, Address: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <div class="mb-3">
//                   <label
//                     for="exampleFormControlTextarea1"
//                     className="text-info"
//                   >
//                     Reason
//                   </label>
//                   <textarea
//                     class="form-control"
//                     id="exampleFormControlTextarea1"
//                     placeholder="Why are you Applying?"
//                     onChange={(e) => {
//                       setUser({ ...User, Reason: e.target.value });
//                     }}
//                     rows="3"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="col-sm-4 mx-5 my-3">
//                 <div>
//                   <label htmlFor="FirstName" className="text-info">
//                     Last Name
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     name="LastName"
//                     id="LastName"
//                     class="form-control"
//                     placeholder="Enter Your Last Name"
//                     onChange={(e) => {
//                       setUser({ ...User, lastName: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label htmlFor="FirstName" className="text-info">
//                     Contact
//                   </label>
//                   <br />
//                   <input
//                     type="number"
//                     minLength={11}
//                     class="form-control"
//                     maxLength={13}
//                     name="Phone_No"
//                     id="Phone_No"
//                     placeholder="Enter Your Phone No"
//                     fullWidth
//                     onChange={(e) => {
//                       setUser({ ...User, Contact: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label className="text-info">Date of Birth</label>
//                   <br />
//                   <input
//                     type="date"
//                     name="date"
//                     id="date"
//                     class="form-control"
//                     dateFormat="dd/MM/yyyy"
//                     onChange={(e) => {
//                       setUser({ ...User, DoB: e.target.value });
//                     }}
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label className="text-info">Gender</label>
//                   <br />
//                   <select
//                     class="form-select"
//                     aria-label="Default select example"
//                     onChange={(e) => {
//                       setUser({ ...User, Gender: e.target.value });
//                     }}
//                   >
//                     <option selected>Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <br />
//                 <div>
//                   <label className="text-info">Are you Muslim?</label>
//                   <br />

//                   <div class="form-check mx-1 my-2">
//                     <input
//                       class="form-check-input"
//                       type="radio"
//                       name="flexRadioDefault"
//                       value="Non-Muslim"
//                       id="flexRadioDefault1"
//                       onChange={(e) => {
//                         setUser({ ...User, Religious: e.target.value });
//                       }}
//                     />
//                     <label class="form-check-label" for="flexRadioDefault1">
//                       No
//                     </label>
//                   </div>
//                   <div class="form-check mx-1 my-2">
//                     <input
//                       class="form-check-input"
//                       type="radio"
//                       value="Muslim"
//                       name="flexRadioDefault"
//                       id="flexRadioDefault2"
//                       onChange={(e) => {
//                         setUser({ ...User, Gender: e.target.value });
//                       }}
//                       // checked
//                     />
//                     <label class="form-check-label" for="flexRadioDefault2">
//                       Yes
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               {/* <div className="col-lg-5 my-3 mx-5 align-bottom">
//                 <button
//                   type="button"
//                   className="btn btn-outline-success"
//                   fullWidth
//                 >
//                   Submit
//                 </button>
//               </div> */}
//               <div className="col-lg-8 my-4 mx-5 align-bottom">
//                 <button
//                   type="reset"
//                   className="btn btn-danger mx-5 "
//                   style={{ paddingLeft: "40px", paddingRight: "40px" }}
//                   onClick={() => HandleReset()}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Profile;
