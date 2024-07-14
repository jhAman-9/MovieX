import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeSlice,
  },
});

