import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import reduxStore from '@store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { client } from '@config/apollo-client';
import { AppStackNavigation } from './navigations/ApptackNavigation';

const { store, persistor } = reduxStore;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <AppStackNavigation />
          </NavigationContainer>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
