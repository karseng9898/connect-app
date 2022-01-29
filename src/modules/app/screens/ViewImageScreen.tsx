import { useRoute } from '@react-navigation/native';
import { View } from 'native-base';
import React, { FC } from 'react';
import { Image } from 'react-native';

export const ViewImageScreen: FC = () => {
  const route = useRoute();
  const { avatar } = route.params as any;

  return (
    <View justifyContent="center" bgColor="black">
      <Image
        source={{ uri: avatar }}
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
      />
    </View>
  );
};
