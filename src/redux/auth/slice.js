import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./opeartions";

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
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = null;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.token = null;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isError = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.token = null;
        state.isError = payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.isLoggedIn = null;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.user = {
          name: null,
          email: null,
        };
        state.isLoggedIn = null;
        state.token = null;
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const authSlice = slice.reducer;
