import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice/loginslice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const makeStore = configureStore({
    reducer :{
        login: loginReducer,
    }
})

export const useAppDispatch = () => useDispatch<typeof makeStore.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof makeStore.getState>> = useSelector;
