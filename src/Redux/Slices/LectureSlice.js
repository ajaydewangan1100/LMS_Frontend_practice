import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  lectures: [],
};

export const getCourseLectures = createAsyncThunk(
  "/course/lecture/get",
  async (cid) => {
    try {
      const res = axiosInstance.get(`/courses/${cid}`);
      toast.promise(res, {
        loading: "Fetching course lectures",
        success: "Lectures fetched successfully",
        error: "Failed to load the lecture",
      });
      return (await res).data;
    } catch (error) {
      toast.error("error?.response?.data?.massage");
    }
  }
);

export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    try {
      const formData = new FormData();
      formData.append("lecture", data.lecture);
      formData.append("title", data.title);
      formData.append("description", data.description);

      const res = axiosInstance.get(`/courses/${data.id}`, formData);
      toast.promise(res, {
        loading: "Adding course lectures",
        success: "Lectures added succeffai",
        error: "Failed to add the lecture",
      });
      return (await res).data;
    } catch (error) {
      toast.error("error?.response?.data?.massage");
    }
  }
);

export const deleteCourseLecture = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    try {
      const res = axiosInstance.delete(
        `/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );
      toast.promise(res, {
        loading: "Deleting course lectures",
        success: "Lectures deleted succeffai",
        error: "Failed to delete the lecture",
      });
      return (await res).data;
    } catch (error) {
      toast.error("error?.response?.data?.massage");
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseLectures.fulfilled, (state, action) => {
        state.lectures = action?.payload?.lectures;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        console.log(action);
        state.lectures = action?.payload?.course?.lectures;
      });
  },
});

export default lectureSlice.reducer;
