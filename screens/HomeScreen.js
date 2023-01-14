import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../utils/AuthContext';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{user.uid}</Text>
      <CustomButton
        buttonTitle="Cerrar Sesión"
        color="#ffff"
        backgroundColor="#fdc500"
        onPress={() => logout()}
      />
    </View>
  );
};

export default HomeScreen;
