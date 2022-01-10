import { gql } from '@apollo/client';

export interface Friend {
  id: number;
  senderId: number;
  receiverId: number;
  status: boolean;
  createdAt: string;
}

const friendFields = `
    id
    senderId
    receiverId
    status
    createdAt
`;

export const GET_FRIENDS = gql`
  query friends {
    friends {
      id
      username
      email
      name
      createdAt
      avatar
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
