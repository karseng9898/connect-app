import { gql } from '@apollo/client';

const loginFields = `
  access_token
  refresh_token
`;

const UserFields = `
  username
  email
  name
  createdAt
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
