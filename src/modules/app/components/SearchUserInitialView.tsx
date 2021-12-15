import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { searchUserInitialViewStyle } from '../style';

export const SearchUserInitialView: FC = () => {
  return (
    <View style={searchUserInitialViewStyle.container}>
      <Icon
        type="material-community"
        name="account-search-outline"
        size={128}
        color="lightgray"
        tvParallaxProperties
      />
      <Text h2 h2Style={searchUserInitialViewStyle.title}>
        Search User
      </Text>
    </View>
  );
};
