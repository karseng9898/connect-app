import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavType } from '@src/navigations/types/navigationType';
import { Pressable } from 'native-base';
import React, { FC } from 'react';
import { Avatar, Text } from 'react-native-elements';
import { contactItemStyle } from '../style';

interface ContactListProps {
  data: any;
}

export const ContactItem: FC<ContactListProps> = props => {
  const { data } = props;
  const navigate = useNavigation<HomeScreenNavType>().navigate;
  console.log(data);
  function handlePress() {
    navigate('ChatsRoomScreen', {
      friendId: data.friendId,
      receiverId: data.receiverId,
      avatar: data.avatar,
      username: data.name,
    });
  }
  return (
    <Pressable
      style={[contactItemStyle.container]}
      _pressed={{ opacity: 0.7 }}
      onPress={handlePress}>
      <Avatar
        source={{ uri: data.avatar }}
        rounded
        size="medium"
        icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
        containerStyle={{ borderColor: 'lightgray', borderWidth: 0.4 }}
      />
      <Text style={[contactItemStyle.name]}>{data.name}</Text>
    </Pressable>
  );
};
