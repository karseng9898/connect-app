import { HideKeyboard } from '@common';
import { AuthButton } from '@components';
import { AppStackNavigationParam } from '@customTypes/NavigationParams';
import { LoginForm } from '@forms';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login } from '@store/actions/auth-action';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type LoginScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;
export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavType>();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  interface FormValues {
    usernameOrEmail: string;
    password: string;
  }
  const initialValues: FormValues = {
    usernameOrEmail: '',
    password: '',
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('HomeScreens');
    }
  }, [isAuthenticated, navigation]);

  async function onSubmit(value: FormValues) {
    const { usernameOrEmail, password } = value;
    await login({ username: usernameOrEmail, password })(dispatch);
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
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  keyboardVerticalOffset={130}>
                  <AuthButton onPress={handleSubmit} title="Login" />
                </KeyboardAvoidingView>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    </HideKeyboard>
  );
};
