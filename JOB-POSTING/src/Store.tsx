import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlice";
export default configureStore({
  reducer: {
    user: UserReducer,
  },
});
