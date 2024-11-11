import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "features/global";

export default configureStore({
  reducer: {
    project: projectReducer,
  },
});
