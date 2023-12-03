import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    verifyCode: "",
    isAuth: false,
  },
  reducers: {
    authCode: (state, action) => {
      state.verifyCode = action.payload.code;
    },
    logout: (state) => {
      state.verifyCode = "";
      state.isAuth = false;
    },
    verified: (state) => {
      state.isAuth = true;
    },
    verifyverificationCode: {},
  },
});

export const authCode = authSlice.actions.authCode;
export const logout = authSlice.actions.logout;
export const verified = authSlice.actions.verified;

export default authSlice.reducer;
