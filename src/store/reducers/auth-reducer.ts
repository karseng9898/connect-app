import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/graphql/user.graphql';

interface AuthState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user: User | null;
}
const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: null,
};

export interface UpdateMePayloadAction {
  user: User | null;
}
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
    updateMe: (state, action: PayloadAction<UpdateMePayloadAction>) => {
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
