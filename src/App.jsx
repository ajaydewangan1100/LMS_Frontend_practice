import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CourseList from "./Pages/Course/CourseList";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";
import CourseDescription from "./Pages/Course/CourseDescription";
import RequiredAuth from "./Components/Auth/RequireAuth";
import CreateCourse from "./Pages/Course/CreateCourse";
import Profile from "./Pages/User/Profile";
import EditProfile from "./Pages/User/EditProfile";
import Checkout from "./Pages/Payments/Checkout";
import CheckoutSuccess from "./Pages/Payments/CheckoutSuccess";
import CheckoutFailure from "./Pages/Payments/CheckoutFailure";
import Displaylectures from "./Pages/Dashboard/Displaylectures";
import AddLecture from "./Pages/Dashboard/AddLecture";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Defined breakpoint for mobile screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="bg-red-500 text-white p-4">
          <h1>This website is not optimized for mobile or tablet devices.</h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<CourseList />}></Route>
          <Route path="/denied" element={<Denied />}></Route>

          <Route
            path="/course/description"
            element={<CourseDescription />}
          ></Route>

          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<RequiredAuth allowedRoles={["ADMIN"]} />}>
            <Route path="/course/create" element={<CreateCourse />}></Route>
            <Route path="/course/addlecture" element={<AddLecture />}></Route>
            <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={["ADMIN", "USER"]} />}>
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/user/editprofile" element={<EditProfile />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/checkout/success"
              element={<CheckoutSuccess />}
            ></Route>
            <Route path="/checkout/fail" element={<CheckoutFailure />}></Route>
            <Route
              path="/course/displaylectures"
              element={<Displaylectures />}
            ></Route>
          </Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
