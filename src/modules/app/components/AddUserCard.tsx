import { useQuery } from '@apollo/client';
import { client } from '@config/apollo-client';
import {
  ACCEPT_FRIEND,
  ADD_FRIEND,
  CHECK_FRIEND_STATUS,
  UNFRIEND,
} from '@src/graphql/friend.graphql';
import { Pressable, Text } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { GestureResponderEvent } from 'react-native-modal';
import { addUserCardStyle } from '../style';
import { AddUserCardProps } from '../types';
import { CardContainerView } from './CardContainer';

export const AddUserCard: FC<AddUserCardProps> = props => {
  const { user } = props;
  const [status, setStatus] = useState<
    'pending' | 'success' | 'requested' | null
  >(null);
  const { data, loading, refetch } = useQuery(CHECK_FRIEND_STATUS, {
    variables: { id: user.id },
  });

  useEffect(() => {
    if (loading) {
      return;
    }
    if (data === undefined) {
      return;
    }
    if (data.checkFriendStatus === null) {
      setStatus(null);
      return;
    }
    if (data.checkFriendStatus.status === true) {
      setStatus('success');
      return;
    }
    setStatus('pending');
  }, [data, loading]);

  const handleAddFriend = async () => {
    try {
      await client.mutate({ mutation: ADD_FRIEND, variables: { id: user.id } });
      refetch();
    } catch (e) {}
  };

  const handleAcceptRequest = async () => {
    try {
      await client.mutate({
        mutation: ACCEPT_FRIEND,
        variables: { id: user.id },
      });
      refetch();
    } catch (e) {}
  };

  const handleCancelRequest = async () => {};

  const handleUnfriend = async () => {
    try {
      await client.mutate({
        mutation: UNFRIEND,
        variables: { id: user.id },
      });
      refetch();
    } catch (e) {}
  };

  const Action = () => {
    if (status === 'pending') {
      return (
        <ActionButton
          icon={{
            type: 'font-awesome',
            name: 'send-o',
            pressedName: 'send',
            color: 'dodgerblue',
          }}
          status="Request Sent"
          onPress={handleCancelRequest}
        />
      );
    } else if (status === 'requested') {
      return (
        <ActionButton
          icon={{
            type: 'ionicon',
            name: 'person-outline',
            pressedName: 'person',
            color: 'dodgerblue',
          }}
          status="Accept Friend"
          onPress={handleAcceptRequest}
        />
      );
    } else if (status === 'success') {
      return (
        <ActionButton
          icon={{
            type: 'font-awesome-5',
            name: 'user-friends',
            pressedName: 'user-friends',
            color: 'dodgerblue',
          }}
          status="Friend"
          onPress={handleUnfriend}
        />
      );
    } else {
      return (
        <ActionButton
          icon={{
            type: 'ionicon',
            name: 'person-add-outline',
            pressedName: 'person-add',
            color: 'dodgerblue',
          }}
          status="Add Friend"
          onPress={handleAddFriend}
        />
      );
    }
  };

  return (
    <CardContainerView>
      <View style={[addUserCardStyle.container]}>
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
        <View style={[addUserCardStyle.rightContainer]}>
          <View style={[addUserCardStyle.textContainer]}>
            <Text style={[addUserCardStyle.name]}>{user.name}</Text>
          </View>
          <Action />
        </View>
      </View>
    </CardContainerView>
  );
};

interface ActionButtonProps {
  icon: {
    type: string;
    name: string;
    pressedName: string;
    color: string;
  };
  status: string;
  onPress: (e: GestureResponderEvent) => void;
}
const ActionButton: FC<ActionButtonProps> = props => {
  const { icon, onPress, status } = props;
  const { type, name, pressedName, color } = icon;

  const [addPressed, setAddPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setAddPressed(true)}
      onPressOut={() => setAddPressed(false)}
      onPress={onPress}
      _pressed={{ opacity: 0.7 }}>
      <Icon
        type={type}
        name={addPressed ? pressedName : name}
        size={32}
        color={color}
        tvParallaxProperties
      />
      <Text mt={2} fontSize={12} color="dodgerblue" fontWeight="semibold">
        {status}
      </Text>
    </Pressable>
  );
};
