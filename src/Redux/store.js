import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice.js";
import courseSliceReducer from "./Slices/CourseSlice.js";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: courseSliceReducer,
  },
  devTools: true,
});

export default store;
