import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    email: "",
  
    password: "",
  
    loggedIn: false,
  
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
  
  });

  export const loginActions= loginslice.actions;

const loginReducer = loginslice.reducer





export default loginReducer;