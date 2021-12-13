import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from '../navigationParams';

export interface AuthButtonProps {
  onPress: () => void;
  title: string;
  loading: boolean;
}

export type AuthScreenAppNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'AuthScreens'
>;

export * from './login';
export * from './register';
