import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import { toast } from "react-hot-toast";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.data);

  async function handleCancellation() {
    const typedMail = prompt("Enter your email for cancel subscription");

    if (typedMail === null) return;
    if (typedMail === "") {
      toast.error("Please enter mail for cancel subscription");
      return;
    }
    if (typedMail !== userData.email) {
      toast.error("Wrong mail entered!");
      return;
    }

    const toastId = toast.loading("Initiating cancellation!");

    await dispatch(cancelCourseBundle());
    toast.dismiss(toastId);
    await dispatch(getUserData());

    toast.success("Cancellation completed");
    // navigate("/");
  }

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <img
            src={userData?.avatar?.secure_url}
            className="w-40 m-auto rounded-full border border-black"
            alt="Profile image"
          />
          <h3 className="text-xl font-semibold text-center capitalize">
            {userData?.fullName}
          </h3>
          <div className="grid grid-cols-2 ">
            <p>Email:</p>
            <p>{userData?.email}</p>

            <p>Role: </p>
            <p>{userData?.role}</p>

            <p>Subscription:</p>
            <p>
              {userData?.subscription?.status === "active"
                ? "Active"
                : "Inactive"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              to="/changepassword"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center "
            >
              <button>Change Password</button>
            </Link>
            <Link
              to="/user/editprofile"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center "
            >
              <button>Edit profile</button>
            </Link>
          </div>
          {userData?.subscription?.status === "active" && (
            <button
              onClick={handleCancellation}
              className="w-full bg-red-600 hover:bg-red-500 py-2 transition-all ease-in-out duration-300"
            >
              Cancel subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Profile;
