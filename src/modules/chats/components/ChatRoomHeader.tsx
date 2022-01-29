import { RouteProp } from '@react-navigation/native';
import { AppStackNavigationParam } from '@src/navigations/types/navigationParams';
import { ChatRoomNavType } from '@src/navigations/types/navigationType';
import { Pressable } from 'native-base';
import React, { FC } from 'react';
import { Avatar, Icon, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ChatRoomHeaderProps {
  route: RouteProp<AppStackNavigationParam, 'ChatsRoomScreen'>;
  navigation: ChatRoomNavType;
}
export const ChatRoomHeader: FC<ChatRoomHeaderProps> = props => {
  const { route, navigation } = props;
  const { username, avatar } = route.params;

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
      <Pressable
        flexDir="row"
        onPress={() => navigation.navigate('ViewImageScreen', { avatar })}>
        <Avatar
          source={{
            uri: avatar,
          }}
          rounded
          icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
          containerStyle={{
            marginHorizontal: 2,
          }}
          size="small"
        />
        <Text h4 style={{ marginHorizontal: 6 }}>
          {username}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
