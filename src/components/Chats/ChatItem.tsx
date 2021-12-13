import React, { FC } from 'react';
import { View } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';
import { formatDistanceToNow } from 'date-fns';
import { chatsScreenStyle } from '@styles';

interface ChatItemProps {
  data: ChatItemDataType;
}
export interface ChatItemDataType {
  id: string;
  name: string;
  avatarUrl: string;
  createdAt: string;
  content: string;
}
export const ChatItem: FC<ChatItemProps> = props => {
  const { name, avatarUrl, createdAt, content } = props.data;

  return (
    <View>
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
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
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
    </View>
  );
};
