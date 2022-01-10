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
      <Avatar
        source={{ uri: data.avatar }}
        rounded
        size="medium"
        icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
        containerStyle={{ borderColor: 'lightgray', borderWidth: 0.4 }}
      />
      <Text style={[contactItemStyle.name]}>{data.name}</Text>
    </View>
  );
};
