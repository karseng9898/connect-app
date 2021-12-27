import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsMenuScreen } from '@src/modules/settings/screens/SettingsMenuScreen';
import { SettingsStackNavigationParam } from '@src/navigations/types/navigationParams';
import React from 'react';

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
