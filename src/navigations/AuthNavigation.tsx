import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthMenuScreen, LoginScreen, RegisterScreen } from '@screens';
import { AuthStackNavigationParam } from '@customTypes/NavigationParams';

const Stack = createNativeStackNavigator<AuthStackNavigationParam>();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthMenuScreen"
        component={AuthMenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
    </Stack.Navigator>
  );
};