import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const AuthScreen = () => {
  return (
    <View style={{backgroundColor: 'gray', height: '100%'}}>
      <Text>AuthScreen</Text>
      <CustomButton
        buttonTitle="Log In"
        color="#f0f0f0"
        backgroundColor="#006d77"
      />
      <CustomButton
        buttonTitle="Sign In"
        color="#006d77"
        backgroundColor="#f0f0f0"
      />
    </View>
  );
};

export default AuthScreen;
