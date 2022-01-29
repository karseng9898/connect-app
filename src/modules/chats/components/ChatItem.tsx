import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';
import { chatsScreenStyle } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { ChatItemProps } from '../types';
import moment from 'moment';
import { HomeScreenNavType } from '@src/navigations/types/navigationType';

export const ChatItem: FC<ChatItemProps> = props => {
  const { friendId, receiverId, lastMessage, username, avatar, createdAt } =
    props.data;
  const navigate = useNavigation<HomeScreenNavType>().navigate;

  const onPress = () => {
    navigate('ChatsRoomScreen', {
      friendId,
      receiverId,
      avatar,
      username,
    });
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? '#ccc' : 'white',
      })}
      onPress={onPress}>
      <View style={[chatsScreenStyle.itemContainer]}>
        <Avatar
          source={{
            uri: avatar || undefined,
          }}
          rounded
          icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
          containerStyle={{ borderColor: 'lightgray', borderWidth: 0.4 }}
          size="medium"
        />

        {/* Text Content Container */}
        <View style={[chatsScreenStyle.itemTextContainer]}>
          {/* Name and Time Container */}
          <View style={[chatsScreenStyle.itemNameTimeContainer]}>
            <Text style={[chatsScreenStyle.itemName]}>{username}</Text>
            <Text style={[chatsScreenStyle.itemTime]}>
              {moment(createdAt).fromNow()}
            </Text>
          </View>

          {/* Content / last message */}
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[chatsScreenStyle.itemContent]}>
            {lastMessage}
          </Text>
        </View>
      </View>
      <Divider />
    </Pressable>
  );
};
