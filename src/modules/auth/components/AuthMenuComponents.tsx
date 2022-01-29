import { authStyles } from '@styles';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { AuthMenuNavType } from '../screens/AuthMenuScreen';

interface AuthButtonsProps {
  navigation: AuthMenuNavType;
}
export const AuthButtons: FC<AuthButtonsProps> = props => {
  const { navigation } = props;

  const LoginButton = () => {
    return (
      <Button
        title="Login"
        style={authStyles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    );
  };

  const RegisterButton = () => {
    return (
      <Button
        type="clear"
        title="Register"
        style={authStyles.button}
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    );
  };

  return (
    <View>
      <LoginButton />
      <RegisterButton />
    </View>
  );
};

export const Logo = () => {
  return (
    <View style={authStyles.logoContainer}>
      <Image
        source={require('../../../../assets/connect.gif')}
        style={authStyles.logo}
        resizeMode="contain"
      />
    </View>
  );
};
