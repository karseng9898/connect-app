import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { client } from '@config/apollo-client';
import { DELETE_POST, REPORT_POST } from '@src/graphql/post.graphql';
import moment from 'moment';
import { Pressable, Text, Toast, View } from 'native-base';
import React, { FC } from 'react';
import { Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

export const Item: FC<{
  id: number;
  authorId: number;
  userId?: number;
  content: string;
  avatar?: string;
  name: string;
  createdAt: string;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<any>>;
}> = props => {
  const { avatar, name, content, createdAt, id, authorId, userId, refetch } =
    props;

  const deleteConfirmation = () =>
    Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await client.mutate({ mutation: DELETE_POST, variables: { id } });
            Toast.show({
              description: 'Deleted Successfully',
            });
          } catch (e) {}
          refetch();
        },
        style: 'destructive',
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);

  const reportPost = () =>
    Alert.alert('Report Post', 'Are you sure you want to report this post?', [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await client.mutate({ mutation: REPORT_POST, variables: { id } });
            Toast.show({
              description: 'Reported Successfully',
            });
          } catch (e) {}
        },
        style: 'destructive',
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);

  return (
    <Pressable
      onLongPress={() => {
        if (authorId === userId) {
          deleteConfirmation();
        } else {
          reportPost();
        }
      }}
      flexDir="row"
      alignItems="flex-start"
      bgColor="white"
      borderWidth={0.5}
      borderRadius={12}
      borderColor="gray.300"
      m={3}
      px={3}
      py={3}>
      <Avatar
        source={{
          uri: avatar || undefined,
        }}
        size="medium"
        icon={{ type: 'ionicon', name: 'person', color: 'lightgray' }}
        containerStyle={{
          borderWidth: 0.5,
          borderRadius: 8,
          borderColor: 'lightgray',
        }}
        avatarStyle={{ borderRadius: 8 }}
        imageProps={{ resizeMode: 'cover' }}
      />
      <View flex={1} ml={2}>
        <View flexDir="row" justifyContent="space-between" alignItems="center">
          <Text>{name}</Text>
          <Text>{moment(createdAt).fromNow()}</Text>
        </View>

        <Text>{content}</Text>
      </View>
    </Pressable>
  );
};
