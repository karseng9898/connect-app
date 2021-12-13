import { client } from '@config/apollo-client';
import { GET_ME, LOGIN } from '@src/graphql/user.graphql';
import { AppDispatch } from '@store';
import {
  failLogin,
  requestLogin,
  successLogin,
  successLogout,
  updateMe,
} from '@store/reducers/auth-reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginInput {
  username: string;
  password: string;
}
export const login = (data: LoginInput) => async (dispatch: AppDispatch) => {
  const { username, password } = data;
  try {
    dispatch(requestLogin());
    const res = await client.mutate({
      mutation: LOGIN,
      variables: { username, password },
    });
    const access_token = res.data.login.access_token;
    const refresh_token = res.data.login.refresh_token;
    console.log(access_token);
    await AsyncStorage.setItem('@access_token', access_token);
    await AsyncStorage.setItem('@refresh_token', refresh_token);

    dispatch(successLogin());
  } catch (e) {
    dispatch(failLogin());
    console.warn(e);
  }
};

export const getMe = () => async (dispatch: AppDispatch) => {
  try {
    const res = await client.query({ query: GET_ME });
    console.log(res);
    dispatch(updateMe(res.data));
  } catch (e) {
    console.warn(e);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  await AsyncStorage.multiRemove(['@access_token', '@refresh_token']);
  dispatch(successLogout());
};
