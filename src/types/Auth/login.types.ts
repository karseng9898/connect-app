import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from '@customTypes/NavigationParams';

export type LoginScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;

export interface LoginInput {
  usernameOrEmail: string;
  password: string;
}
