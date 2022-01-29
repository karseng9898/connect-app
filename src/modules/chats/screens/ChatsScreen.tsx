import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import { MyContext } from '@src/App';
import { ChatResponse, GET_CHATS } from '@src/graphql/message.graphql';
import { ChatItem } from '@src/modules/chats/components/ChatItem';
import { appStyles } from '@src/styles';
import _ from 'lodash';
import React, { useCallback, useContext } from 'react';
import { FlatList, View } from 'react-native';

export const ChatsScreen = () => {
  const { data, loading, refetch } = useQuery(GET_CHATS);
  const chats: ChatResponse[] = data?.chats;
  const sortedChats = _.sortBy(chats, chat => chat.createdAt).reverse();

  const socket = useContext(MyContext);
  const event = 'event:messageSent';

  socket.on(event, () => {
    refetch();
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View style={[appStyles.containerWhiteBg]}>
      {!loading && (
        <FlatList
          data={sortedChats}
          keyExtractor={(item, index) => `${item.friendId}_${index}`}
          ListEmptyComponent={() => <View />}
          renderItem={({ item }) => <ChatItem data={item} />}
        />
      )}
    </View>
  );
};
