import { ChatItem } from '@components/Chats/ChatItem';
import { appStyles } from '@src/styles';
import { ChatItemDataType } from '@customTypes/chat';
import React from 'react';
import { FlatList, View } from 'react-native';

export const ChatsScreen = () => {
  return (
    <View style={[appStyles.containerWhiteBg]}>
      <FlatList
        data={datas}
        keyExtractor={item => item.chatRoomId}
        renderItem={data => <ChatItem data={data.item} />}
      />
    </View>
  );
};

const datas: ChatItemDataType[] = [
  {
    chatRoomId: '1',
    name: 'Chen Fook Lin',
    avatarUrl:
      'https://cdn.vox-cdn.com/thumbor/tLbr-XJ_5VNUsvnC8uO-BHIp4kw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22998582/1328996608.jpg',
    content: 'Quis ad magna velit magna aliquip veniam cillum.',
    createdAt: '2021-12-13T03:52:28+0000',
  },
  {
    chatRoomId: '2',
    name: 'Loh Li Ling',
    avatarUrl: 'https://y.qichejiashi.com/tupian/upload/282009612.jpg',
    content:
      'Enim reprehenderit esse nostrud ut excepteur consectetur reprehenderit in nisi non minim Lorem dolor magna.',
    createdAt: '2021-12-13T04:14:02+0000',
  },
];
