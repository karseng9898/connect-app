import { gql } from '@apollo/client';

const fields = `
  access_token
  refresh_token
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(loginUserInput: {username: $username, password: $password}) {
      ${fields}
    }
  }
`;
