import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStackNavigationParam } from '../types/NavigationParams';
import { AuthStackNavigation } from './AuthNavigation';

const Stack = createNativeStackNavigator<AppStackNavigationParam>();

export const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreens"
        component={AuthStackNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
