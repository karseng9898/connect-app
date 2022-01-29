import { HomeTabNavigationParam } from '@src/navigations/types/navigationParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getMe } from '@store/actions/auth-action';
import { useAppDispatch } from '@store/hooks';
import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { ContactHeaderAddUserIcon } from '@src/modules/contacts/components/ContactHeaderAddUserIcon';
import { ChatStackNavigation } from './ChatStackNavigation';
import { ContactsScreen } from '@src/modules/contacts/screens/ContactScreen';
import { FeedsScreen } from '@src/modules/feeds/screens/FeedsScreen';

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
        } else if (route.name === 'FeedsScreen') {
          title = 'Feeds';
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
            } else if (route.name === 'FeedsScreen') {
              type = 'ionicon';
              iconName = focused ? 'newspaper' : 'newspaper-outline';
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
          title,
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
      <Tab.Screen name="FeedsScreen" component={FeedsScreen} />
      <Tab.Screen name="SettingsScreens" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
};
