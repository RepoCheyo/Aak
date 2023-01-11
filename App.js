/* eslint-disable prettier/prettier */

import React from 'react';

import AuthStack from './stacks/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
