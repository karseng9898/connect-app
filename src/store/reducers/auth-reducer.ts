import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user: any;
}
const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestLogin: state => {
      state.isAuthenticating = true;
    },
    successLogin: (state, action: PayloadAction<any>) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    failLogin: state => {
      state.isAuthenticated = false;
      state.isAuthenticating = true;
    },
    successLogout: state => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = null;
    },
  },
});

export const { requestLogin, successLogin, successLogout, failLogin } =
  authSlice.actions;

export default authSlice.reducer;
