import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import { GET_POSTS, PostResponse } from '@src/graphql/post.graphql';
import { useAppSelector } from '@store/hooks';
import _ from 'lodash';
import { View } from 'native-base';
import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../components/Header';
import { Item } from '../components/Item';

export const FeedsScreen: FC = () => {
  const user = useAppSelector(state => state.auth.user);

  const { data, loading, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });
  const feeds: PostResponse[] = data?.posts;
  const sortedFeeds = _.sortBy(feeds, feed => feed.createdAt).reverse();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View flex={1} bgColor="white">
      {feeds && (
        <FlatList
          data={sortedFeeds}
          refreshing={loading}
          onRefresh={refetch}
          ListHeaderComponent={() => <Header user={user} />}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              userId={user?.id}
              content={item.content}
              name={item.username}
              createdAt={item.createdAt}
              avatar={item.avatar}
              authorId={item.authorId}
              refetch={refetch}
            />
          )}
        />
      )}
    </View>
  );
};
