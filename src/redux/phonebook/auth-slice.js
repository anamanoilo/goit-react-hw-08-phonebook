import { createSlice } from '@reduxjs/toolkit';
import {
  registerContact,
  loginContact,
  refreshUser,
  logOut,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerContact.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginContact.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
  },
});

export default authSlice;
