import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatRoomScreen } from '@src/modules';
import { ChatRoomHeader } from '@src/modules/chats/components';
import React from 'react';
import { HomeTabNavigation } from '.';
import { AppStackNavigationParam } from './types/navigationParams';
import { AuthStackNavigation } from './AuthNavigation';

const Stack = createNativeStackNavigator<AppStackNavigationParam>();

export const AppStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreens" component={AuthStackNavigation} />
      <Stack.Screen name="HomeScreens" component={HomeTabNavigation} />
      <Stack.Screen
        name="ChatsRoomScreen"
        component={ChatRoomScreen}
        options={({ route, navigation }) => {
          return {
            headerShown: true,
            header: () => {
              return <ChatRoomHeader route={route} navigation={navigation} />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};
