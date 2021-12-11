import { AuthButtons, Logo } from '@components/Auth/AuthMenuComponents';
import { AuthStackNavigationParam } from '@customTypes/NavigationParams';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from '@store/hooks';
import { successLogout } from '@store/reducers/auth-reducer';
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
  const dispatch = useAppDispatch();

  // Just for testing purposes
  dispatch(successLogout());
  return (
    <SafeAreaView style={[appStyles.container, authStyles.container]}>
      <Logo />
      <AuthButtons navigation={navigation} />
    </SafeAreaView>
  );
};
