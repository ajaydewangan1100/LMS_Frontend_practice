import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    title: "",
    category: "",
    createdBy: "",
    description: "",
    thumbnail: null,
    previewImage: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadedImage,
        });
      });
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if (
      !userInput.title ||
      !userInput.description ||
      !userInput.category ||
      !userInput.createdBy ||
      !userInput.thumbnail
    ) {
      toast.error("All fields are mendatory!");
      return;
    }

    const res = await dispatch(createNewCourse(userInput));
    if (res?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
      });
    }

    navigate("/courses");
  }

  return (
    <HomeLayout>
      <div className="flex justify-center items-center h-[100vh]">
        <form
          noValidate
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative "
        >
          <Link className="absolute top-7 link text-2xl text-accent cursor-pointer">
            <AiOutlineArrowLeft />
          </Link>
          <h1 className="text-center text-2xl font-bold">Create new course</h1>

          <main className="grid grid-cols-2 gap-x-10 ">
            <div className="gap-y-6">
              <div>
                <label htmlFor="image_uploads" className="cursor-pointer">
                  {userInput.previewImage ? (
                    <img
                      className="w-full h-44 m-auto border rounded-sm"
                      src={userInput.previewImage}
                    />
                  ) : (
                    <div className="w-full h-44 m-auto border flex justify-center items-center ">
                      <h1 className="font-bold text-lg">
                        Upload course thumbnail
                      </h1>
                    </div>
                  )}
                </label>
                <input
                  className="hidden"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  id="image_uploads"
                  name="image_uploads"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="title" className="text-lg font-semibold">
                  Course title
                </label>
                <input
                  type="text"
                  required
                  name="title"
                  id="titel"
                  placeholder="Enter course title"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="createdBy" className="text-lg font-semibold">
                  Course Instructor
                </label>
                <input
                  type="text"
                  required
                  name="createdBy"
                  id="createdBy"
                  placeholder="Enter course instructor name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.createdBy}
                  onChange={handleUserInput}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="category" className="text-lg font-semibold">
                  Course category
                </label>
                <input
                  type="text"
                  required
                  name="category"
                  id="category"
                  placeholder="Enter course category"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.category}
                  onChange={handleUserInput}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="description" className="text-lg font-semibold">
                  Course description
                </label>
                <textarea
                  required
                  name="description"
                  id="description"
                  placeholder="Enter course description"
                  className="bg-transparent px-2 py-1 border h-24 overflow-y-auto resize-none"
                  value={userInput.description}
                  onChange={handleUserInput}
                />
              </div>
            </div>
          </main>
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold text-lg bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out "
          >
            Create Course
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default CreateCourse;
