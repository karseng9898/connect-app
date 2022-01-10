import { ApolloQueryResult, useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@src/graphql/user.graphql';
import { Box, Pressable, Text } from 'native-base';
import React, { FC } from 'react';
import { Avatar } from 'react-native-elements';
import { addUserCardStyle } from '../style';
import { Alert } from 'react-native';
import { client } from '@config/apollo-client';
import { ACCEPT_FRIEND, UNFRIEND } from '@src/graphql/friend.graphql';

interface AcceptUserCardProps {
  userId: number;
  refetch: () => Promise<ApolloQueryResult<any>>;
}
export const AcceptUserCard: FC<AcceptUserCardProps> = props => {
  const { userId, refetch } = props;

  const { data, loading } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
  });
  const user = data?.getUserById;

  const requestActionAlert = () =>
    Alert.alert(
      'Friend Request',
      '',
      [
        {
          text: 'Accept',
          style: 'default',
          onPress: handleAccept,
        },
        {
          text: 'Reject',
          style: 'destructive',
          onPress: handleReject,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );

  return loading ? null : (
    <Pressable
      flexDir="row"
      bgColor="white"
      m={3}
      p={3}
      borderRadius={12}
      onPress={onPress}
      _pressed={{ backgroundColor: 'blueGray.100', opacity: 0.7 }}>
      <Avatar
        source={{
          uri: user.avatar || undefined,
        }}
        size="large"
        icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
        containerStyle={[addUserCardStyle.avatarContainer]}
        rounded
        imageProps={{ resizeMode: 'cover' }}
      />
      <Box style={[addUserCardStyle.rightContainer]}>
        <Box style={[addUserCardStyle.textContainer]}>
          <Text style={[addUserCardStyle.name]}>{user.name}</Text>
        </Box>
      </Box>
    </Pressable>
  );

  function onPress() {
    requestActionAlert();
  }

  async function handleAccept() {
    try {
      await client.mutate({
        mutation: ACCEPT_FRIEND,
        variables: { id: userId },
      });
      await refetch();
    } catch (e) {
      //
    }
  }

  async function handleReject() {
    try {
      await client.mutate({
        mutation: UNFRIEND,
        variables: { id: userId },
      });
      await refetch();
    } catch (e) {
      //
    }
  }
};
