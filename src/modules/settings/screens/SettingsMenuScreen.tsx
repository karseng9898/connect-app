import { useNavigation } from '@react-navigation/native';
import { SettingsMenuScreenNavType } from '@src/navigations/types/navigationType';
import { SectionListDataType } from '@src/types/app.types';
import { logout } from '@store/actions/auth-action';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { appStyles, settingStyle } from '@styles';
import React from 'react';
import { SectionList, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { logoutConfirmationAlert } from '../components/SettingAlerts';
import { SettingItem } from '../components/SettingItem';
import { SettingListHeader } from '../components/SetttingListHeader';
import { SettingDataType } from '../types';

export const SettingsMenuScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<SettingsMenuScreenNavType>();
  const user = useAppSelector(state => state.auth.user);

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
          let haveIndicator = false;

          if (item.name.toLowerCase() === 'chats') {
            type = 'ionicon';
            name = 'chatbubble-outline';
            color = '#69be70';
            haveIndicator = true;
          } else if (item.name.toLowerCase() === 'logout') {
            type = 'antdesign';
            name = 'logout';
            color = '#ca4b4b';
            onPress = () => {
              logoutConfirmationAlert(() => {
                logout()(dispatch);
                navigation.navigate('AuthScreens', {
                  screen: 'AuthMenuScreen',
                });
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
              haveIndicator={haveIndicator}
            />
          );
        }}
        renderSectionHeader={() => (
          <Divider style={[settingStyle.sectionHeaderDivider]} />
        )}
        renderSectionFooter={() => <Divider />}
        ListHeaderComponent={() => (
          <SettingListHeader user={user} navigation={navigation} />
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const DATA: SectionListDataType<SettingDataType>[] = [
  { title: '', data: [{ name: 'Chats' }] },
  {
    title: '',
    data: [{ name: 'Logout' }],
  },
];
