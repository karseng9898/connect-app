import { useQuery } from '@apollo/client';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Friend, GET_FRIEND_REQUESTS } from '@src/graphql/friend.graphql';
import { AppStackNavigationParam } from '@src/navigations/types/navigationParams';
import { appStyles } from '@src/styles';
import { Box } from 'native-base';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { AcceptUserCard } from '../components/AcceptUserCard';
import { NoUserFoundCard } from '../components/NoUserFoundCard';
import { searchUserContentStyle } from '../style';

type Props = NativeStackScreenProps<
  AppStackNavigationParam,
  'FriendRequestScreen'
>;
export const FriendRequestScreen: FC<Props> = () => {
  const { data: friendRequestsData, refetch } = useQuery(GET_FRIEND_REQUESTS, {
    fetchPolicy: 'network-only',
  });

  const friendRequests: Friend[] = friendRequestsData?.friendRequests;

  const Requests = () => {
    return friendRequests.map((request, index) => (
      <AcceptUserCard key={index} userId={request.senderId} refetch={refetch} />
    ));
  };

  const Comp = () => {
    if (friendRequests) {
      if (friendRequests.length === 0) {
        return <NoUserFoundCard />;
      } else {
        return <Box>{Requests()}</Box>;
      }
    } else {
      return null;
    }
  };

  return (
    <View style={[appStyles.container]}>
      <ScrollView style={searchUserContentStyle.container}>
        <Comp />
      </ScrollView>
    </View>
  );
};
