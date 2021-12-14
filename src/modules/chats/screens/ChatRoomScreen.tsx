import { KeyboardAvoidView } from '@components';
import { appStyles } from '@src/styles';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatMessage, MessageInput } from '../components';

export const ChatRoomScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView edges={['bottom']} style={appStyles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ChatMessage isMe={item.userId === 'me'} content={item.content} />
        )}
      />
      <KeyboardAvoidView>
        <MessageInput message={message} setMessage={setMessage} />
      </KeyboardAvoidView>
    </SafeAreaView>
  );
};

const DATA = [
  {
    id: '1',
    userId: 'test',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '2',
    userId: 'test',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '3',
    userId: 'me',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '4',
    userId: 'test',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '5',
    userId: 'me',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '6',
    userId: 'test',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
  {
    id: '7',
    userId: 'test',
    createdAt: '2021-12-13T04:14:02+0000',
    content: 'Labore ut aliquip qui occaecat commodo deserunt mollit deserunt.',
  },
];
