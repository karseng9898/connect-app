import { gql } from '@apollo/client';

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  createdAt: string;
}

export interface ChatResponse {
  friendId: number;
  receiverId: number;
  username: string;
  avatar: string;
  lastMessage: string;
  createdAt: string;
}

const messageField = `
    id
    senderId
    receiverId
    content
    createdAt
`;

export const GET_MESSAGES = gql`
  query messages($id: Float!) {
    messages(friendId: $id) {
      ${messageField}
    }
  }
`;

export const SEND_MESSAGE = gql`
    mutation sendMessage($id: Int!, $friendId: Int!, $content: String!) {
        sendMessage(receiverId: $id, friendId: $friendId, content: $content) {
            ${messageField}
        }
    }
`;

export const GET_CHATS = gql`
  query chats {
    chats {
      friendId
      receiverId
      username
      avatar
      createdAt
      lastMessage
    }
  }
`;
