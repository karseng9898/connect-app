import { ApolloProvider } from '@apollo/client';
import { client } from '@config/apollo-client';
import { NavigationContainer } from '@react-navigation/native';
import reduxStore from '@store';
import { NativeBaseProvider } from 'native-base';
import React, { createContext } from 'react';
import { SOCKET_URL } from 'react-native-dotenv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { io } from 'socket.io-client';
import { AppStackNavigation } from './navigations/AppStackNavigation';

const { store, persistor } = reduxStore;
const socket = io(SOCKET_URL);
export const MyContext = createContext<any>(socket);

const App = () => {
  return (
    <MyContext.Provider value={socket}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <NativeBaseProvider>
              <NavigationContainer>
                <AppStackNavigation />
              </NavigationContainer>
            </NativeBaseProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </MyContext.Provider>
  );
};

export default App;
