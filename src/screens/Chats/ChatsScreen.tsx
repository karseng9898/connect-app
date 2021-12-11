import { useAppSelector } from '@store/hooks';
import React from 'react';
import { View, Text } from 'react-native';

export const ChatsScreen = () => {
  const auth = useAppSelector(state => state.auth);
  return (
    <View>
      <Text>ChatsScreen</Text>
      <Text>{JSON.stringify(auth.user)}</Text>
    </View>
  );
};
