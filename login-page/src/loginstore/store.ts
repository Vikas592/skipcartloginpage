import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice/loginslice";

export const makeStore = configureStore({
    reducer :{
        login: loginReducer,
    }
})




