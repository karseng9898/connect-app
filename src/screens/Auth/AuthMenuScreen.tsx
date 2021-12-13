import { AuthButtons, Logo } from '@components/Auth/AuthMenuComponents';
import { AuthStackNavigationParam } from '@src/types/navigationParams';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appStyles } from '@styles/AppStyle';
import { authStyles } from '@styles/AuthStyle';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '@store/hooks';
import { AuthScreenAppNavProp } from '@customTypes/auth';

export type AuthMenuNavType = NativeStackNavigationProp<
  AuthStackNavigationParam,
  'AuthMenuScreen'
>;
export const AuthMenuScreen = () => {
  const navigation = useNavigation<AuthMenuNavType>();
  const appNavigation = useNavigation<AuthScreenAppNavProp>();
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
