import { HomeScreenNavType } from '@src/navigations/types/navigationType';
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

interface ContactHeaderAddUserIconProps {
  navigation: HomeScreenNavType;
}
export const ContactHeaderAddUserIcon: FC<
  ContactHeaderAddUserIconProps
> = props => {
  const { navigation } = props;

  const onPress = () => {
    navigation.navigate('SearchUserScreen');
  };
  return (
    <Pressable onPress={onPress}>
      <Icon
        type="ionicon"
        name="add"
        size={28}
        color="#333"
        tvParallaxProperties
      />
    </Pressable>
  );
};
