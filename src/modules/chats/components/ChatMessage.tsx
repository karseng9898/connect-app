import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface ChatMessageProps {
  isMe: boolean;
  content: string;
}
export const ChatMessage: FC<ChatMessageProps> = props => {
  const { isMe, content } = props;
  return (
    <View style={{ flexDirection: 'row', margin: 12 }}>
      <View
        style={[
          {
            padding: 12,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            maxWidth: '70%',
          },
          isMe && {
            marginLeft: 'auto',
            backgroundColor: 'dodgerblue',
          },
        ]}>
        <Text style={isMe ? { color: 'white' } : { color: 'black' }}>
          {content}
        </Text>
      </View>
    </View>
  );
};
