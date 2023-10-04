import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginslice";

export const makeStore = configureStore({
    reducer :{
        login: loginReducer,
    }
})




