import { HideKeyboard } from '@common';
import { AuthButton } from '@components';
import { LoginForm } from '@forms';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen = () => {
  return (
    <HideKeyboard>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={[appStyles.containerPadding, loginStyles.container]}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={e => console.warn(e)}>
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
