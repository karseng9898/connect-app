import { gql } from '@apollo/client';

export interface User {
  username: string;
  email: string;
  name: string;
  createdAt: string;
  avatar: string | null;
}

const loginFields = `
  access_token
  refresh_token
`;

const UserFields = `
  username
  email
  name
  createdAt
  avatar
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(loginUserInput: {username: $username, password: $password}) {
      ${loginFields}
    }
  }
`;

export const REGISTER = gql`
  mutation register($username: String!, $email: String!, $name: String!, $password: String!) {
    register(createUserInput: {username: $username, email: $email, name: $name, password: $password}) {
      ${UserFields}
    }
  }
`;

export const GET_ME = gql`
  query getMe {
    getMe {
      ${UserFields}
    }
  }
`;

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      ${UserFields}
    }
  }
`;

export const UPDATE_ME = gql`
  mutation updateMe($name: String!, $thumbnail: Upload) {
    updateMe(name: $name, thumbnail: $thumbnail) {
      url
    }
  }
`;
