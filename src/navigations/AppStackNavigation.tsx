import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStackNavigationParam } from './types/navigationParams';
import { AuthStackNavigation } from './AuthNavigation';
import { HomeTabNavigation } from './HomeTabNavigtaion';
import { EditProfileScreen } from '@src/modules/app/screens/EditProfileScreen';
import { SearchUserScreen } from '@src/modules/app/screens/SearchUserScreen';
import { ChatRoomHeader } from '@src/modules/chats/components/ChatRoomHeader';
import { ChatRoomScreen } from '@src/modules/chats/screens/ChatRoomScreen';

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
      <Stack.Screen
        name="SearchUserScreen"
        component={SearchUserScreen}
        options={{
          presentation: 'modal',
          headerShown: true,
          title: 'Add Friend',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};
