import { RouteProp } from '@react-navigation/native';
import { AppStackNavigationParam } from '@customTypes/navigationParams';
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatRoomNavType } from '@customTypes/navigationType';

interface ChatRoomHeaderProps {
  route: RouteProp<AppStackNavigationParam, 'ChatsRoomScreen'>;
  navigation: ChatRoomNavType;
}
export const ChatRoomHeader: FC<ChatRoomHeaderProps> = props => {
  const { route, navigation } = props;
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'white',
      }}>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? 'lightgray' : undefined,
          padding: 3,
          borderRadius: 999,
        })}
        onPress={() => navigation.goBack()}>
        <Icon
          type="ionicon"
          name="chevron-back"
          size={26}
          color="#368cee"
          tvParallaxProperties
        />
      </Pressable>
      <Avatar
        source={{
          uri: 'https://y.qichejiashi.com/tupian/upload/282009612.jpg',
        }}
        rounded
        size="small"
        containerStyle={{ marginHorizontal: 8 }}
      />
      <Text h4>room id: {route.params.chatRoomId}</Text>
    </SafeAreaView>
  );
};
