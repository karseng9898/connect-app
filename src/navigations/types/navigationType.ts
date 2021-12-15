import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from './navigationParams';

export type ChatRoomNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'ChatsRoomScreen'
>;

export type HomeScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'HomeScreens'
>;

export type AuthScreenAppNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;

export type RegisterScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;

export type SettingsMenuScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'HomeScreens'
>;
