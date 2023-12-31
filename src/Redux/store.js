import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice.js";
import courseSliceReducer from "./Slices/CourseSlice";
import razorpaySliceReducer from "./Slices/RazorpaySlice";
import LectureSliceReducer from "./Slices/LectureSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: courseSliceReducer,
    razorpay: razorpaySliceReducer,
    lecture: LectureSliceReducer,
  },
  devTools: true,
});

export default store;
