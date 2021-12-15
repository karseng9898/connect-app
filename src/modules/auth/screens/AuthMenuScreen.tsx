import {
  AuthButtons,
  Logo,
} from '@src/modules/auth/components/AuthMenuComponents';
import { AuthStackNavigationParam } from '@src/navigations/types/navigationParams';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appStyles } from '@styles/AppStyle';
import { authStyles } from '@styles/AuthStyle';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '@store/hooks';
import { AuthScreenAppNavType } from '@src/navigations/types';

export type AuthMenuNavType = NativeStackNavigationProp<
  AuthStackNavigationParam,
  'AuthMenuScreen'
>;
export const AuthMenuScreen = () => {
  const navigation = useNavigation<AuthMenuNavType>();
  const appNavigation = useNavigation<AuthScreenAppNavType>();
  const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      appNavigation.navigate('HomeScreens');
    }
  }, [auth.isAuthenticated, appNavigation]);

  return (
    <SafeAreaView style={[appStyles.container, authStyles.container]}>
      <Logo />
      <AuthButtons navigation={navigation} />
    </SafeAreaView>
  );
};