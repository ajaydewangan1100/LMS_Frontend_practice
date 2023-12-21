import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  courseData: [],
};

export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosInstance.get("/courses");

    toast.promise(res, {
      loading: "Loading course data...",
      success: "Courses loaded successfully",
      error: "Failed to get courses!!",
    });

    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const createNewCourse = createAsyncThunk(
  "/course/create",
  async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("category", data?.category);
      formData.append("createdBy", data?.createdBy);
      formData.append("thumbnail", data?.thumbnail);

      const res = axiosInstance.post("/courses", formData);
      toast.promise(res, {
        loading: "Creating new course..",
        success: "Course created successfully",
        error: "Failed to create course!",
      });

      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
