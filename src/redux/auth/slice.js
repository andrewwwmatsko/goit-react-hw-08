import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./opeartions";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoggedIn = null;
        state.token = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoggedIn = null;
        state.token = null;
      });
  },
});

export const authSlice = slice.reducer;
