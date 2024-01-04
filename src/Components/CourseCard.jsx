import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse, getAllCourses } from "../Redux/Slices/CourseSlice";

function CourseCard(data) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   for checking if user is loggedin
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  //   for displayng options according to role
  const role = useSelector((state) => state?.auth?.role);

  data = data?.data;

  async function onCourseDelete(id, e) {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete the course?")) {
      const res = await dispatch(deleteCourse(id));

      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }

  return (
    <div
      onClick={() => navigate("/course/description", { state: data })}
      className="text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700 "
    >
      <div className="overflow-hidden relative">
        {isLoggedIn && role === "ADMIN" ? (
          <button
            className="absolute right-1 bg-red-500 rounded-md top-2 text-white py-1 px-2 border"
            onClick={(e) => onCourseDelete(data?._id, e)}
          >
            <BsTrash />
          </button>
        ) : (
          ""
        )}
        <img
          className="h-48 w-full rounded-t-lg group-hover:scale-[1,2] transition-all ease-in-out duration-300 "
          src={data?.thumbnail?.secure_url}
          alt="Course thumbnail image"
        />
        <div className="p-3 space-y-1 text-white">
          <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
            {data?.title}
          </h2>
          <p className="line-clamp-2">{data?.description}</p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">category : </span>
            {data?.category}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Total lectures : </span>
            {data?.numberOfLectures}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Instructor : </span>
            {data?.createdBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
