/* eslint-disable prettier/prettier */

import React from 'react';
import AuthStack from './stacks/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {AuthContext} from './utils/AuthContext';

StatusBar.setBackgroundColor('#000000c0');
const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
