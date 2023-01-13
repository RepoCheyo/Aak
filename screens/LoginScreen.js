import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CountryPicker from 'react-native-country-picker-modal';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={styles.askContainer}>
          <Text style={styles.askTitle}>¿Cual es tu número?</Text>
          <Text style={styles.askSubtitle}>
            Enviaremos un código para que inicies sesión
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.countryContainer}>
            <CountryPicker countryCode="MX" withFilter withCallingCode />
          </View>
          <View style={styles.phoneInputCont}>
            <CustomInput
              width="80%"
              selectionColor={'gray'}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            buttonTitle="Enviar"
            color="#ffff"
            backgroundColor="#fdc500"
            onPress={() => console.log('Enviado')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  askContainer: {
    padding: 12,
    paddingLeft: 25,
    alignItems: 'flex-start',
  },
  inputsContainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  phoneInputCont: {
    flex: 0.9,
  },
  countryContainer: {
    flex: 0.1,
    marginLeft: 20,
    backgroundColor: '#d9d9d9',
    padding: 5,
    height: 40,
    borderRadius: 10,
  },
  askTitle: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Inter-Black',
  },
  askSubtitle: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});
