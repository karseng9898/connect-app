import { loginStyles } from '@styles';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Divider } from 'react-native-elements';

interface AuthButtonProps {
  onPress: () => void;
  title: string;
}
export const AuthButton: FC<AuthButtonProps> = props => {
  const { onPress, title } = props;

  return (
    <View>
      <Divider orientation="horizontal" width={1} style={loginStyles.divider} />
      <Button title={title} onPress={onPress} />
    </View>
  );
};
