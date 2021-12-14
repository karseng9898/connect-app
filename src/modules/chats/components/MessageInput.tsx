import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { messageInputStyles } from '../styles';

interface MessageInputProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
export const MessageInput: FC<MessageInputProps> = props => {
  const { message, setMessage } = props;
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <View style={[messageInputStyles.container]}>
      <View style={[messageInputStyles.inputBoxContainer]}>
        <TextInput
          placeholder="Message"
          onChangeText={setMessage}
          multiline
          style={[messageInputStyles.inputBox]}
        />
      </View>
      <Pressable
        style={[messageInputStyles.sendButton]}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={() => console.warn(message)}>
        <Icon
          type="ionicon"
          name={buttonPressed ? 'send' : 'send-outline'}
          size={28}
          color="#333"
          tvParallaxProperties
        />
      </Pressable>
    </View>
  );
};
