import React, { FC } from 'react';
import { Text } from 'react-native';
import { contactSectionHeaderStyle } from '../style';

interface ContactListSectionHeaderProps {
  title: string;
}
export const Header: FC<ContactListSectionHeaderProps> = props => {
  const { title } = props;
  return (
    <Text style={[contactSectionHeaderStyle.container]}>
      {title.toUpperCase()}
    </Text>
  );
};
