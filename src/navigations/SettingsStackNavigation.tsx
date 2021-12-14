import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsMenuScreen } from '@src/modules';
import { SettingsStackNavigationParam } from '@src/navigations/types/navigationParams';

const Stack = createNativeStackNavigator<SettingsStackNavigationParam>();

export const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsMenuScreen}
        options={{
          headerShadowVisible: false,
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};
