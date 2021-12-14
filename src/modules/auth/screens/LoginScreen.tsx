import { HideKeyboard, KeyboardAvoidView } from '@components';
import { LoginForm } from '@forms';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenAppNavType } from '@src/navigations/types';
import { login } from '@store/actions/auth-action';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../components';
import { LoginInput } from '../types';

export const LoginScreen = () => {
  const auth = useAppSelector(state => state.auth);
  const navigate = useNavigation<AuthScreenAppNavType>().navigate;
  const dispatch = useAppDispatch();

  const initialValues: LoginInput = {
    usernameOrEmail: '',
    password: '',
  };

  /**
   * @functions
   */

  async function onSubmit(value: LoginInput) {
    const { usernameOrEmail, password } = value;
    try {
      await login({ username: usernameOrEmail, password })(dispatch);
      navigate('HomeScreens');
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <HideKeyboard>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={[appStyles.containerPadding, loginStyles.container]}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => {
            return (
              <View style={loginStyles.content}>
                <LoginForm />
                <KeyboardAvoidView>
                  <AuthButton
                    onPress={handleSubmit}
                    loading={auth.isAuthenticating}
                    title="Login"
                  />
                </KeyboardAvoidView>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    </HideKeyboard>
  );
};
