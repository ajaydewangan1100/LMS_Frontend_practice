import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/AuthSlice.js";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //   for checking if user is loggedin
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  //   for displayng options according to role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  async function handleLogout(e) {
    e.preventDefault();

    const res = await dispatch(logout());

    if (res?.payload?.success) {
      navigate("/");
    }
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/course/create">Create new course</Link>
              </li>
            )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <Link to="/login">
                    <button className="btn-primary px-12 py-2 font-semibold rounded-md w-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn-secondary px-8 py-2 font-semibold rounded-md w-full">
                      Signup
                    </button>
                  </Link>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link onClick={handleLogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {location.pathname !== "/" && (
        <button
          onClick={() => navigate(-1)}
          className="fixed z-51 border py-2 px-3 font-semibold rounded-md right-10 top-10 transition-all ease-in-out duration-300 text-yellow-600 hover:text-yellow-400 "
        >
          Go back
        </button>
      )}

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
