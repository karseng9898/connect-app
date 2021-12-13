import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackNavigationParam } from '../NavigationParams';

export interface SettingSectionListDataType {
  title: string;
  data: SettingDataType[];
}
export interface SettingDataType {
  name: string;
}

export type SettingsMenuScreenNavType = NativeStackNavigationProp<
  AppStackNavigationParam,
  'HomeScreens'
>;

export interface SettingItemProps {
  onPress: () => void;
  index: number;
  iconType: string;
  iconName: string;
  iconColor: string;
  name: string;
}
