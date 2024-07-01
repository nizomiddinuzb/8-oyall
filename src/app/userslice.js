import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthState: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
    logaut: (state, { payload }) => {},
    isAuthChang: (state, { payload }) => {},
  },
});

export const { login, logaut, isAuthChang } = UserSlice.actions;

export default UserSlice.reducer;