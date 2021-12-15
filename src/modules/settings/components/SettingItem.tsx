import { settingStyle } from '@styles';
import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Divider, Icon, Text } from 'react-native-elements';
import { SettingItemProps } from '../types';

export const SettingItem: FC<SettingItemProps> = props => {
  const {
    onPress,
    index,
    iconType,
    iconName,
    iconColor,
    name,
    haveIndicator = false,
  } = props;
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
        {haveIndicator && (
          <Icon
            type="feather"
            name="chevron-right"
            size={20}
            color="#777"
            tvParallaxProperties
          />
        )}
      </View>
    </Pressable>
  );
};
