import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { addCourseLecture } from "../../Redux/Slices/LectureSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddLecture() {
  const courseDetails = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    lecture: undefined,
    title: "",
    description: "",
    videoSrc: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  function handleVideo(e) {
    const video = e.target.files[0];
    const source = window.URL.createObjectURL(video);
    setUserInput({
      ...userInput,
      lecture: video,
      videoSrc: source,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.lecture || !userInput.title || !userInput.description) {
      toast.error("All fields are mandatory!");
      return;
    }
    const res = await dispatch(addCourseLecture(userInput));
    if (res?.payload?.success) {
      navigate(-1)
      setUserInput({
        id: courseDetails._id,
        lecture: undefined,
        title: "",
        desciption: "",
        videoSrc: "",
      });
    }
  }

  useEffect(() => {
    if (!courseDetails) navigate("/courses");
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-16">
        <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
          <header className="flex items-center justify-center relative">
            <button
              className="absolute left-2 text-xl text-green-500"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft />
            </button>
            <h1 className="text-xl text-yellow-500 font-semibold">
              Add new lecture
            </h1>
          </header>
          <form onSubmit={onFormSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              placeholder="Enter the title of the lecture"
              onChange={handleInputChange}
              className="bg-transparent px-3 py-1 border "
              value={userInput.title}
            />
            <textarea
              name="description"
              placeholder="Enter the description of the lecture"
              onChange={handleInputChange}
              className="bg-transparent px-3 py-1 border resize-none overflow-y-auto h-36"
              value={userInput.description}
            />
            {userInput?.videoSrc ? (
              <div className="rounded-t-sm w-full text-right">
                <video
                  muted
                  src={userInput.videoSrc}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen"
                  className="object-fill rounded-t-sm w-full"
                ></video>
                <button
                  className="my-2 rounded-md bg-gray-600 border px-2 py-1 "
                  onClick={() => {
                    setUserInput({
                      ...userInput,
                      lecture: undefined,
                      videoSrc: "",
                    });
                  }}
                >
                  Remove video
                </button>
              </div>
            ) : (
              <div className="h-48 border flex items-center justify-center cursor-pointer">
                <label
                  htmlFor="lecture"
                  className="font-semibold text-xl cursor-pointer"
                >
                  Choose your video
                </label>
                <input
                  type="file"
                  src="src/Assets/UAN Generation Video.mp4"
                  name="lecture"
                  id="lecture"
                  accept="video/mp4 video/x-mp4 video/*"
                  className="hidden"
                  onChange={handleVideo}
                />
              </div>
            )}
            <button
              className="btn btn-primary py-1 font-semibold text-lg"
              type="submit"
            >
              Add new lecture
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AddLecture;
