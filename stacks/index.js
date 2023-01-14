/* eslint-disable prettier/prettier */

import React from 'react';
import {StatusBar} from 'react-native';
import AppWrap from '../AppWrap';
import {AuthContext, AuthProvider} from '../utils/AuthContext';

StatusBar.setBackgroundColor('#000000c0');
const AppContainer = () => {
  return (
    <AuthProvider>
      <AppWrap />
    </AuthProvider>
  );
};

export default AppContainer;
