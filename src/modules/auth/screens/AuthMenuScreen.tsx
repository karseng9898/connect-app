import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  AuthButtons,
  Logo,
} from '@src/modules/auth/components/AuthMenuComponents';
import { AuthStackNavigationParam } from '@src/navigations/types/navigationParams';
import { appStyles } from '@styles/AppStyle';
import { authStyles } from '@styles/AuthStyle';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export type AuthMenuNavType = NativeStackNavigationProp<
  AuthStackNavigationParam,
  'AuthMenuScreen'
>;
export const AuthMenuScreen = () => {
  const navigation = useNavigation<AuthMenuNavType>();

  return (
    <SafeAreaView style={[appStyles.container, authStyles.container]}>
      <Logo />
      <AuthButtons navigation={navigation} />
    </SafeAreaView>
  );
};
