import { HomeTabNavigationParam } from '@src/navigations/types/navigationParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactsScreen } from '@src/modules';
import { getMe } from '@store/actions/auth-action';
import { useAppDispatch } from '@store/hooks';
import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { ChatStackNavigation } from '.';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { Pressable } from 'react-native';
import { ContactHeaderAddUserIcon } from '@src/modules/contacts/components/ContactHeaderAddUserIcon';

const Tab = createBottomTabNavigator<HomeTabNavigationParam>();

export const HomeTabNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getMe()(dispatch);
  }, [dispatch]);

  return (
    <Tab.Navigator
      initialRouteName="ChatsScreens"
      screenOptions={({ route }) => {
        let title;
        if (route.name === 'ChatsScreens') {
          title = 'Chats';
        } else if (route.name === 'SettingsScreens') {
          title = 'Settings';
        } else if (route.name === 'ContactsScreen') {
          title = 'Contacts';
        }

        return {
          tabBarIcon: ({ color, focused, size }) => {
            let type, iconName;
            if (route.name === 'ChatsScreens') {
              type = 'ionicon';
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'SettingsScreens') {
              type = 'ionicon';
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'ContactsScreen') {
              type = 'ionicon';
              iconName = focused ? 'person' : 'person-outline';
            }
            return (
              <Icon
                type={type}
                name={iconName as string}
                color={color}
                size={size}
                // package type error
                tvParallaxProperties
              />
            );
          },
          title: title,
          headerShown: false,
        };
      }}>
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={({ navigation }) => {
          return {
            headerShown: true,
            headerRightContainerStyle: {
              paddingRight: 12,
            },
            headerRight: () => (
              <ContactHeaderAddUserIcon navigation={navigation} />
            ),
          };
        }}
      />
      <Tab.Screen name="ChatsScreens" component={ChatStackNavigation} />
      <Tab.Screen name="SettingsScreens" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
};
