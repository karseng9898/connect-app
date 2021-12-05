import { HideKeyboard } from '@common';
import { AuthButton } from '@components';
import { AppStackNavigationParam } from '@customTypes/NavigationParams';
import { LoginForm } from '@forms';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type LoginScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;
export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavType>();
  function onSubmit(e: any) {
    console.warn(e);
    navigation.navigate('HomeScreens');
  }
  return (
    <HideKeyboard>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={[appStyles.containerPadding, loginStyles.container]}>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
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
