import { settingStyle } from '@styles';
import { SettingItemProps } from '@customTypes/Settings';
import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Divider, Icon, Text } from 'react-native-elements';

export const SettingItem: FC<SettingItemProps> = props => {
  const { onPress, index, iconType, iconName, iconColor, name } = props;
  return (
    <Pressable style={[settingStyle.itemContainer]} onPress={onPress}>
      {index !== 0 && <Divider />}
      <View style={[settingStyle.itemInnerContainer]}>
        <Icon
          type={iconType}
          name={iconName}
          size={20}
          color={iconColor}
          tvParallaxProperties
        />
        <Text style={[settingStyle.itemText]}>{name}</Text>
      </View>
    </Pressable>
  );
};
