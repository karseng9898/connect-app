import { NavigationContainer } from '@react-navigation/native';
import reduxStore from '@store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStackNavigation } from './navigations/ApptackNavigation';

const { store, persistor } = reduxStore;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppStackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
