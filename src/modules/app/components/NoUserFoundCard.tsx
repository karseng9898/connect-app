import React, { FC } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { noUserFoundCardStyle } from '../style';
import { CardContainerView } from './CardContainer';

export const NoUserFoundCard: FC = () => {
  return (
    <CardContainerView>
      <View style={noUserFoundCardStyle.container}>
        <Icon
          type="material-community"
          name="account-search"
          size={24}
          color="gray"
          tvParallaxProperties
        />
        <Text style={noUserFoundCardStyle.text}>No User found</Text>
      </View>
    </CardContainerView>
  );
};
