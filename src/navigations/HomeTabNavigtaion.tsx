import { HomeTabNavigationParam } from '@customTypes/NavigationParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ChatStackNavigation } from '.';

const Tab = createBottomTabNavigator<HomeTabNavigationParam>();

export const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatsScreens" component={ChatStackNavigation} />
    </Tab.Navigator>
  );
};
