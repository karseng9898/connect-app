import { AppDispatch } from '@store';
import { requestLogin, successLogin } from '@store/reducers/auth-reducer';

export const login = (user: any) => async (dispatch: AppDispatch) => {
  dispatch(requestLogin());
  setTimeout(() => {
    dispatch(successLogin(user));
  }, 3000);
};
