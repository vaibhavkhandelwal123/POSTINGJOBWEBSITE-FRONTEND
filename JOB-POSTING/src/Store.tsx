import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
export default configureStore({
  reducer: {
    user: UserReducer,
    profile:profileReducer
  },
});
