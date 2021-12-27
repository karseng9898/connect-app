import { useLazyQuery } from '@apollo/client';
import { GET_USER, User } from '@src/graphql/user.graphql';
import { appStyles } from '@src/styles';
import React, { FC, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AddUserCard } from '../components/AddUserCard';
import { NoUserFoundCard } from '../components/NoUserFoundCard';
import { SearchUserInitialView } from '../components/SearchUserInitialView';
import { SearchUserInputContainer } from '../components/SearchUserInputContainer';
import { searchUserContentStyle } from '../style';

export const SearchUserScreen: FC = () => {
  const [searchPressed, setSearchPressed] = useState(false);

  const [getUser, { data }] = useLazyQuery(GET_USER);
  const user: User | null | undefined = data?.user;

  const Comp = () => {
    if (user === null) {
      return <NoUserFoundCard />;
    } else if (user) {
      return <AddUserCard user={user} />;
    } else {
      return <SearchUserInitialView />;
    }
  };

  return (
    <View style={[appStyles.container]}>
      <SearchUserInputContainer
        searchPressed={searchPressed}
        setSearchPressed={setSearchPressed}
        onSearch={(value: string) =>
          getUser({ variables: { username: value } })
        }
      />
      <ScrollView style={searchUserContentStyle.container}>
        <Comp />
      </ScrollView>
    </View>
  );
};
