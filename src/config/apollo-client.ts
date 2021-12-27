import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import { API_BASE } from 'react-native-dotenv';

const uploadLink: any = createUploadLink({
  uri: `${API_BASE}/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const access_token = await AsyncStorage.getItem('@access_token');
  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
        )}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const additiveLink = from([authLink, errorLink, uploadLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: additiveLink,
});
