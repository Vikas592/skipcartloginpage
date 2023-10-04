
import { createAsyncThunk } from '@reduxjs/toolkit'
import customAxios from '../../axios';

const rememberMeThunk = createAsyncThunk(
  'loginPage/rememberMe',
    async (token: String|null) => {
            const response = await customAxios.post("/rememberme", {
                token
            });
            return response.data
  }
);

const loginThunk = createAsyncThunk(
  'loginPage/login',
    async (body: {email:String,password:String, token: String | null}) => {
            const response = await customAxios.post("/login", body);
            return response.data
  }
);

const logoutThunk = createAsyncThunk(
  'loginPage/logout',
    async (body: {token: String | null}) => {
            const response = await customAxios.post("/logout", body);
            return response.data
  }
);


export {rememberMeThunk,loginThunk, logoutThunk}