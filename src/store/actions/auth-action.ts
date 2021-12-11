import { client } from '@config/apollo-client';
import { LOGIN } from '@src/graphql/user.graphql';
import { AppDispatch } from '@store';
import { requestLogin, successLogin } from '@store/reducers/auth-reducer';

export const login =
  ({ username, password }: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(requestLogin());
      const res = await client.mutate({
        mutation: LOGIN,
        variables: { username, password },
      });
      const access_token = res.data.login.access_token;
      const refresh_token = res.data.login.refresh_token;
      dispatch(successLogin({ user: { access_token, refresh_token } }));
    } catch (e) {
      console.error(e);
    }
  };
