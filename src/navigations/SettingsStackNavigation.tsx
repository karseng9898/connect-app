import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsMenuScreen } from '@screens';
import { SettingsStackNavigationParam } from '@src/types/NavigationParams';

const Stack = createNativeStackNavigator<SettingsStackNavigationParam>();

export const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsMenuScreen} />
    </Stack.Navigator>
  );
};
