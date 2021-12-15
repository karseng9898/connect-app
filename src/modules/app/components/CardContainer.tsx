import React, { FC } from 'react';
import { View } from 'react-native';
import { cardContainerStyle } from '../style';

export const CardContainerView: FC = ({ children }) => {
  return <View style={cardContainerStyle.container}>{children}</View>;
};
