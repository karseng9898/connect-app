import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppStackNavigation} from './navigations/ApptackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
};

export default App;
