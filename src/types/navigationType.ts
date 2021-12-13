import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from './navigationParams';

export type ChatsScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'HomeScreens'
>;

export type ChatRoomNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'ChatsRoomScreen'
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
