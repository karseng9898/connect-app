import { gql } from '@apollo/client';
import { User } from './user.graphql';

export interface Friend {
  friendId: number;
  user: User;
}

const friendFields = `
    id
    senderId
    receiverId
    status
    createdAt
    lastMessage
`;

export const GET_FRIENDS = gql`
  query friends {
    friends {
      friendId
      user {
        id
        username
        email
        name
        createdAt
        avatar
      }
    }
  }
`;

export const GET_FRIEND_REQUESTS = gql`
    query friendRequests {
        friendRequests {
            ${friendFields}
        }
    }
`;

export const GET_FRIEND = gql`
    query friend($id: Int!)  {
        friend(id: $id) {
            ${friendFields}
        }
    }
`;

export const CHECK_FRIEND_STATUS = gql`
    query checkFriendStatus($id: Int!) {
        checkFriendStatus(friendId: $id) {
            ${friendFields}
        }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend($id: Int!) {
        addFriend(receiverId: $id) {
            ${friendFields}
        }
    }
`;

export const ACCEPT_FRIEND = gql`
  mutation acceptFriend($id: Int!) {
    acceptFriend(friendId: $id)
  }
`;

export const UNFRIEND = gql`
  mutation unfriend($id: Int!) {
    unfriend(friendId: $id)
  }
`;
