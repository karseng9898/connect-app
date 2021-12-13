import React from 'react';
import { ChatStackNavigationParam } from '@src/types/navigationParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsScreen } from '@screens';

const Stack = createNativeStackNavigator<ChatStackNavigationParam>();

export const ChatStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
    </Stack.Navigator>
  );
};
