import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice"
export default configureStore({
  reducer: {
    user: UserReducer,
    profile:profileReducer,
    filter:filterReducer
  },
});
