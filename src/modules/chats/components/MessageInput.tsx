import React, { FC, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { messageInputStyles } from '../styles';
import { client } from '@config/apollo-client';
import { SEND_MESSAGE } from '@src/graphql/message.graphql';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MessageInput: FC<{ receiverId: number; friendId: number }> = ({
  receiverId,
  friendId,
}) => {
  const [message, setMessage] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  async function handlePress() {
    if (message.length === 0) {
      return;
    }
    await client.mutate({
      mutation: SEND_MESSAGE,
      variables: { id: receiverId, friendId, content: message },
    });
    setMessage('');
  }
  return (
    <SafeAreaView edges={['bottom']} style={[messageInputStyles.container]}>
      <View style={[messageInputStyles.inputBoxContainer]}>
        <TextInput
          placeholder="Message"
          onChangeText={setMessage}
          value={message}
          multiline
          style={[messageInputStyles.inputBox]}
        />
      </View>
      <Pressable
        style={[messageInputStyles.sendButton]}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={handlePress}>
        <Icon
          type="ionicon"
          name={buttonPressed ? 'send' : 'send-outline'}
          size={28}
          color="#333"
          tvParallaxProperties
        />
      </Pressable>
    </SafeAreaView>
  );
};
