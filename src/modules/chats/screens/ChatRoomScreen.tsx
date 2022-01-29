import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import { MyContext } from '@src/App';
import { GET_MESSAGES, Message } from '@src/graphql/message.graphql';
import { KeyboardAvoidView } from '@src/modules/app/components/KeyboardViews';
import { appStyles } from '@src/styles';
import { useAppSelector } from '@store/hooks';
import _ from 'lodash';
import { View } from 'native-base';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ChatMessage } from '../components/ChatMessage';
import { MessageInput } from '../components/MessageInput';

export const ChatRoomScreen = () => {
  const route = useRoute();
  const me = useAppSelector(state => state.auth.user);
  const { friendId, receiverId } = route.params as any;
  const socket = useContext(MyContext);
  const room = `user-${friendId}-messages`;

  socket.on(room, () => {
    refetch();
  });

  const { data, loading, refetch } = useQuery(GET_MESSAGES, {
    variables: { id: receiverId },
  });
  const messages: Message[] = data?.messages;
  const sortedMessage = _.sortBy(
    messages,
    message => message.createdAt,
  ).reverse();

  return (
    <View style={[appStyles.container, { backgroundColor: 'white' }]}>
      {!loading && (
        <FlatList
          inverted
          data={sortedMessage}
          renderItem={({ item }) => (
            <ChatMessage
              isMe={item.senderId === me?.id}
              content={item.content}
            />
          )}
        />
      )}
      <KeyboardAvoidView>
        <MessageInput receiverId={receiverId} friendId={friendId} />
      </KeyboardAvoidView>
    </View>
  );
};
