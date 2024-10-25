import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "features/global";

export default configureStore({
  reducer: {
    track: trackReducer,
  },
});
