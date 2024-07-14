import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    showLogin: true,
  },
  reducers: {
    toggleUser: (state) => {
      state.showLogin = !state.showLogin;
    },
  },
});

export const {toggleUser} = loginSlice.actions;
export default loginSlice.reducer;
