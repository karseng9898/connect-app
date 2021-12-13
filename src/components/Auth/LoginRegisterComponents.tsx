import { AuthButtonProps } from '@customTypes/auth';
import { loginStyles } from '@styles';
import React, { FC } from 'react';
import { Alert, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';

export const AuthButton: FC<AuthButtonProps> = props => {
  const { onPress, title, loading } = props;

  return (
    <View>
      <Divider orientation="horizontal" width={1} style={loginStyles.divider} />
      <Button title={title} onPress={onPress} loading={loading} />
    </View>
  );
};

export const successRegisterAlert = (onPress: () => void) =>
  Alert.alert(
    'Register Successful',
    'You have successfully registered your account, you can now proceed to login',
    [
      {
        text: 'Continue',
        onPress,
        style: 'default',
      },
    ],
  );
