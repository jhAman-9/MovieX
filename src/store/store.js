import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import userReducer from "./userSlice";
import loginSlice from "./loginSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeSlice,
    login : loginSlice, 
  },
});

