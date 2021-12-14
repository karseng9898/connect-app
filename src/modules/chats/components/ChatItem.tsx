import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';
import { chatsScreenStyle } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { ChatsScreenNavType } from '@src/navigations/types/navigationType';
import { ChatItemProps } from '../types';
import moment from 'moment';

export const ChatItem: FC<ChatItemProps> = props => {
  const { name, avatarUrl, createdAt, content, chatRoomId } = props.data;
  const navigate = useNavigation<ChatsScreenNavType>().navigate;

  const onPress = () => {
    navigate('ChatsRoomScreen', { chatRoomId });
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
            uri: avatarUrl,
          }}
          rounded
          size="medium"
        />

        {/* Text Content Container */}
        <View style={[chatsScreenStyle.itemTextContainer]}>
          {/* Name and Time Container */}
          <View style={[chatsScreenStyle.itemNameTimeContainer]}>
            <Text style={[chatsScreenStyle.itemName]}>{name}</Text>
            <Text style={[chatsScreenStyle.itemTime]}>
              {moment(createdAt).fromNow()}
            </Text>
          </View>

          {/* Content / last message */}
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[chatsScreenStyle.itemContent]}>
            {content}
          </Text>
        </View>
      </View>
      <Divider />
    </Pressable>
  );
};
