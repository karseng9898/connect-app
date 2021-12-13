import { ChatMessage } from '@components/Chats';
import React from 'react';
import { FlatList } from 'react-native';

export const ChatRoomScreen = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <ChatMessage isMe={item.userId === 'me'} content={item.content} />
      )}
    />
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
