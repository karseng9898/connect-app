import { gql } from '@apollo/client';

export interface Post {
  id: number;
  author: number;
  content: string;
  createdAt: string;
}

export interface PostResponse {
  id: number;
  authorId: number;
  username: string;
  avatar: string;
  content: string;
  createdAt: string;
}

const postFields = `
    id
    author
    content
    createdAt
`;

const postResponse = `
    id
    authorId
    username
    avatar
    createdAt
    content
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      ${postResponse}
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      ${postFields}
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    deletePost(id: $id) {
      createdAt
    }
  }
`;

export const REPORT_POST = gql`
  mutation reportPost($id: Int!) {
    reportPost(id: $id) {
      createdAt
    }
  }
`;
