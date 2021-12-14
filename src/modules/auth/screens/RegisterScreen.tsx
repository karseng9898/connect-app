import { HideKeyboard, KeyboardAvoidView } from '@components';
import { client } from '@config/apollo-client';
import { RegisterForm } from '@forms';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '@src/graphql/user.graphql';
import { RegisterScreenNavType } from '@src/navigations/types';
import { appStyles, loginStyles } from '@styles';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton, successRegisterAlert } from '../components';
import { RegisterInput } from '../types';

export const RegisterScreen = () => {
  const [submiting, setSubmiting] = useState(false);
  const navigate = useNavigation<RegisterScreenNavType>().navigate;

  const initialValues: RegisterInput = {
    email: '',
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  };

  /**
   * @functions
   */

  const onSubmit = async (value: RegisterInput) => {
    try {
      const { email, username, name, password } = value;
      setSubmiting(true);
      await client.mutate({
        mutation: REGISTER,
        variables: { email, username, name, password },
      });
      setSubmiting(false);
      successRegisterAlert(() => {
        navigate('AuthScreens', { screen: 'LoginScreen' });
      });
    } catch (e) {
      setSubmiting(false);
      console.warn(e);
    }
  };

  return (
    <HideKeyboard>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={[appStyles.containerPadding, loginStyles.container]}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, values }) => {
            return (
              <View style={loginStyles.content}>
                <RegisterForm values={values} />
                <KeyboardAvoidView>
                  <AuthButton
                    onPress={handleSubmit}
                    loading={submiting}
                    title="Register"
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
