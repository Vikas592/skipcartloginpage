import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, rememberMeThunk } from "./loginSlice.thunk";
import { loginFullfilled, loginPending, loginRejected, logoutFullfilled, logoutPending, logoutRejected, rememberMeFullfilled, rememberMePending, rememberMeRejected } from "./loginSlice.extraReducers";

const initialState = {

  email: "",
  password: "",
  loggedIn: false,
  rememberMeLoading: false,
  loginLoading: false,
  logoutLoading:false,
  } as any;

  export const LOGIN_SLICE_KEY = "login";

  const loginslice = createSlice({

    name: LOGIN_SLICE_KEY,
  
    initialState,
  
    reducers: {
  
      loginSuccess: (state) => {
  
        state.loggedIn = !state.loggedIn;
  
      },
  
      updateEmail: (state, action) => {
  
        state.email = action.payload;
  
      },
  
      updatePassword: (state, action) => {
  
        state.password = action.payload;
  
      },
  
    },
    extraReducers: (builder) => {
      builder.addCase(rememberMeThunk.pending, rememberMePending)
      builder.addCase(rememberMeThunk.fulfilled, rememberMeFullfilled)
      builder.addCase(rememberMeThunk.rejected, rememberMeRejected)
      builder.addCase(loginThunk.pending, loginPending)
      builder.addCase(loginThunk.fulfilled, loginFullfilled)
      builder.addCase(loginThunk.rejected, loginRejected)
        builder.addCase(logoutThunk.pending, logoutPending)
      builder.addCase(logoutThunk.fulfilled, logoutFullfilled)
      builder.addCase(logoutThunk.rejected, logoutRejected)
  },
  
  });

  export const loginActions= loginslice.actions;

const loginReducer = loginslice.reducer





export default loginReducer