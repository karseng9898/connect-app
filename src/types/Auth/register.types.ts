import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from '../NavigationParams';

export interface RegisterInput {
  username: string;
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export type RegisterScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;
