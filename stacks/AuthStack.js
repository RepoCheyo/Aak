/* eslint-disable prettier/prettier */
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#ffff',
            shadowColor: '#ffff',
            elevation: 0,
          },
        }}
      />

      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{title: 'Registrate'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
