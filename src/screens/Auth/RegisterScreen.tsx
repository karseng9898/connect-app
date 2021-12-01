import { HideKeyboard } from '@common';
import { AuthButton } from '@components';
import { RegisterForm } from '@forms';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RegisterScreen = () => {
  return (
    <HideKeyboard>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={[appStyles.containerPadding, loginStyles.container]}>
        <Formik
          initialValues={{
            email: '',
            username: '',
            name: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={e => console.warn(e)}>
          {({ handleSubmit, values }) => {
            return (
              <View style={loginStyles.content}>
                <RegisterForm values={values} />
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  keyboardVerticalOffset={130}>
                  <AuthButton onPress={handleSubmit} title="Register" />
                </KeyboardAvoidingView>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    </HideKeyboard>
  );
};
