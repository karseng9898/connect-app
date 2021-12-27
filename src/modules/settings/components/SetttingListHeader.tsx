import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { settingListHeaderStyle } from '../style';
import { SettingListHeaderProps } from '../types';

export const SettingListHeader: FC<SettingListHeaderProps> = props => {
  const { user, navigation } = props;
  const uri = user?.avatar || undefined;

  const handlePress = () => {
    navigation.navigate('EditProfileScreen');
  };
  return (
    <Pressable style={[settingListHeaderStyle.container]} onPress={handlePress}>
      <Avatar
        source={{ uri }}
        size="large"
        rounded
        icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
        containerStyle={settingListHeaderStyle.avatarStyle}
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
