import React, { FC } from 'react';
import { Pressable, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavType } from '@src/navigations/types/navigationType';
import { User } from '@src/graphql/user.graphql';

interface HeaderProps {
  user: User | null;
}
export const Header: FC<HeaderProps> = ({ user }) => {
  const navigation = useNavigation<HomeScreenNavType>();
  function onPress() {
    navigation.navigate('CreatePostScreen');
  }

  return (
    <SafeAreaView edges={['top']}>
      <View flexDir="row" px={3}>
        <View flex={1} />
        <Pressable p={1} onPress={onPress} _pressed={{ opacity: 0.7 }}>
          <Icon type="ionicon" name="add" size={28} tvParallaxProperties />
        </Pressable>
      </View>
      <View
        pb={5}
        alignItems="center"
        borderBottomWidth={1}
        bgColor="white"
        borderColor="gray.300">
        <Avatar
          source={{
            uri: user?.avatar || undefined,
          }}
          size="large"
          icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
          containerStyle={[]}
          rounded
          imageProps={{ resizeMode: 'cover' }}
        />
        <Text fontSize={20}>
          {user?.name} {user?.name && "'s Feeds"}
        </Text>
      </View>
    </SafeAreaView>
  );
};
