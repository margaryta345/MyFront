import { configureStore } from "@reduxjs/toolkit";
import { lessonsReducer } from "./slices/lessons";
import { authReducer } from "./slices/auth";
const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
    auth: authReducer,
  },
});
export default store;
