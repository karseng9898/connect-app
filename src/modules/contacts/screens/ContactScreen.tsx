import { useQuery } from '@apollo/client';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GET_FRIENDS, GET_FRIEND_REQUESTS } from '@src/graphql/friend.graphql';
import { User } from '@src/graphql/user.graphql';
import { AppStackNavigationParam } from '@src/navigations/types/navigationParams';
import { appStyles } from '@src/styles';
import { Box, Pressable, Text, View } from 'native-base';
import React, { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { Icon } from 'react-native-elements';
import { ContactItem } from '../components/ContactItem';
import { Header } from '../components/ContactListSectionHeader';

type ContactsScreenNavigationProps = NativeStackNavigationProp<
  AppStackNavigationParam,
  'HomeScreens'
>;
export const ContactsScreen = () => {
  const navigation = useNavigation<ContactsScreenNavigationProps>();

  const [sectionData, setSectionData] = useState<any>([]);
  const [friendRequests, setFriendRequests] = useState<any>([]);

  const {
    data,
    loading,
    refetch: refetchFriend,
  } = useQuery(GET_FRIENDS, {
    fetchPolicy: 'network-only',
  });

  const {
    data: friendRequestsData,
    loading: friendRequestLoading,
    refetch: refetchRequest,
  } = useQuery(GET_FRIEND_REQUESTS, {
    fetchPolicy: 'network-only',
  });

  useFocusEffect(
    useCallback(() => {
      refetchFriend();
      refetchRequest();
    }, [refetchFriend, refetchRequest]),
  );

  const friendRequestCount = friendRequests.length || 0;

  useFocusEffect(
    useCallback(() => {
      if (!loading) {
        const titledList = extractFirstChar(data?.friends);
        setSectionData(sortSectionList(titledList));
      }
    }, [loading, data]),
  );

  useFocusEffect(
    useCallback(() => {
      if (!friendRequestLoading) {
        setFriendRequests(friendRequestsData?.friendRequests);
      }
    }, [friendRequestLoading, friendRequestsData]),
  );

  const onPress = () => {
    navigation.navigate('FriendRequestScreen');
  };

  const FriendRequestItem = () => {
    return (
      <Pressable
        bgColor="white"
        borderRadius={12}
        padding={4}
        mx={2}
        mb={1}
        mt={4}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        _pressed={{ backgroundColor: 'lightgray', opacity: 0.7 }}
        onPress={onPress}>
        <Box flexDir="row" mx={2} alignItems="center">
          <Icon
            type="feather"
            name="user-plus"
            size={24}
            tvParallaxProperties
          />
          <Text mx={4}>Friend Request</Text>
        </Box>

        <Text fontSize="lg" fontWeight="bold" color="red.400">
          {friendRequestCount > 0 && friendRequestCount}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={[appStyles.container]}>
      <SectionList
        sections={sectionData}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => {
          return <ContactItem data={item} />;
        }}
        renderSectionHeader={({ section }) => {
          return <Header title={section.title} />;
        }}
        ListHeaderComponent={() => <FriendRequestItem />}
      />
    </View>
  );
};

/**
 * @Fuctions
 */

type TitledList = User & { firstChar: string };
const extractFirstChar = (friends: User[]): TitledList[] => {
  const titledList: TitledList[] = [];

  friends.map((friend: User) => {
    const firstChar = friend.name.slice(0, 1).toUpperCase();

    //* Check if the char is A-Z, if not set it to '#'
    const char =
      firstChar.charCodeAt(0) >= 65 && firstChar.charCodeAt(0) <= 90
        ? firstChar
        : '#';

    const object = { ...friend, firstChar: char };
    titledList.push(object);
  });
  return titledList;
};
type SectionListType = { title: string; data: TitledList[] };

const sortSectionList = (titledList: TitledList[]) => {
  const charExist: string[] = [];
  const sectionList: SectionListType[] = [];

  titledList.map(item => {
    if (!charExist.includes(item.firstChar)) {
      charExist.push(item.firstChar);
    }
  });

  charExist.map(char => {
    const data = titledList.filter(item => item.firstChar === char);
    const listData = {
      title: char,
      data,
    };
    sectionList.push(listData);
  });

  return sectionList.sort((a, b) => {
    if (a.title > b.title) {
      return 0;
    } else {
      return -1;
    }
  });
};
