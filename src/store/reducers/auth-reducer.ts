import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    successLogin: state => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    },
    failLogin: state => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    },
    successLogout: state => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = null;
    },
    updateMe: (state, action: PayloadAction<AnyAction>) => {
      state.user = action.payload.user;
    },
  },
});

export const {
  requestLogin,
  successLogin,
  successLogout,
  failLogin,
  updateMe,
} = authSlice.actions;

export default authSlice.reducer;
