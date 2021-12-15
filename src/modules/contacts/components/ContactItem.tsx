import React, { FC } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { contactItemStyle } from '../style';
import { ContactListDataType } from '../types';

interface ContactListProps {
  data: ContactListDataType;
}

export const ContactItem: FC<ContactListProps> = props => {
  const { data } = props;
  return (
    <View style={[contactItemStyle.container]}>
      <Avatar source={{ uri: data.avatarUri }} rounded size="medium" />
      <Text style={[contactItemStyle.name]}>{data.name}</Text>
    </View>
  );
};
