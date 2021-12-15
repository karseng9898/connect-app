import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { settingListHeaderStyle } from '../style';
import { SettingListHeaderProps } from '../types';

export const SettingListHeader: FC<SettingListHeaderProps> = props => {
  const { user } = props;
  return (
    <Pressable style={[settingListHeaderStyle.container]}>
      <Avatar
        source={{
          uri: 'https://sketchok.com/images/articles/01-cartoons/000-va/24/08.jpg',
        }}
        size="large"
        rounded
        avatarStyle={settingListHeaderStyle.avatarStyle}
      />
      <View style={[settingListHeaderStyle.textContainer]}>
        <Text h4 style={[settingListHeaderStyle.name]}>
          {user?.name}
        </Text>
        <Text>{user?.email}</Text>
      </View>
    </Pressable>
  );
};
