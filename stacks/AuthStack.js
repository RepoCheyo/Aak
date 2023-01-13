/* eslint-disable prettier/prettier */
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';

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
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#ffff',
            elevation: 0,
          },
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Auth')} />
          ),
        })}
      />

      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#ffff',
            elevation: 0,
          },
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Auth')} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
