import { logoutConfirmationAlert, SettingItem } from '@components/Settings';
import { SettingSectionListDataType } from '@src/types/setting';
import { useNavigation } from '@react-navigation/native';
import { appStyles, settingStyle } from '@styles';
import { logout } from '@store/actions/auth-action';
import { useAppDispatch } from '@store/hooks';
import React from 'react';
import { SectionList, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { SettingsMenuScreenNavType } from '@customTypes/navigationType';

export const SettingsMenuScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<SettingsMenuScreenNavType>().navigate;

  return (
    <View style={[appStyles.container]}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, index }) => {
          let type = '';
          let name = '';
          let color = '#333';
          let onPress = () => console.warn(item.name);

          if (item.name.toLowerCase() === 'chats') {
            type = 'ionicon';
            name = 'chatbubble-outline';
            color = '#69be70';
          } else if (item.name.toLowerCase() === 'logout') {
            type = 'antdesign';
            name = 'logout';
            color = '#ca4b4b';
            onPress = () => {
              logoutConfirmationAlert(() => {
                logout()(dispatch);
                navigate('AuthScreens', { screen: 'AuthMenuScreen' });
              });
            };
          }

          return (
            <SettingItem
              name={item.name}
              iconType={type}
              iconName={name}
              iconColor={color}
              index={index}
              onPress={onPress}
            />
          );
        }}
        renderSectionHeader={() => (
          <Divider style={[settingStyle.sectionHeaderDivider]} />
        )}
        renderSectionFooter={() => <Divider />}
        ListHeaderComponent={() => <Text>Header</Text>}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const DATA: SettingSectionListDataType[] = [
  { title: '', data: [{ name: 'Chats' }] },
  { title: '', data: [{ name: 'Logout' }] },
];
