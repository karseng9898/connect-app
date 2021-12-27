import React from 'react';
import { ChatStackNavigationParam } from '@src/navigations/types/navigationParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsScreen } from '@src/modules/chats/screens/ChatsScreen';

const Stack = createNativeStackNavigator<ChatStackNavigationParam>();

export const ChatStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
    </Stack.Navigator>
  );
};
