import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CountryPicker from 'react-native-country-picker-modal';
import CustomButton from '../components/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={{backgroundColor: 'white', height: '100%', flex: 1}}>
        <View style={styles.askContainer}>
          <Text style={styles.askTitle}>¿Cual es tu número?</Text>
          <Text style={styles.askSubtitle}>
            Enviaremos un código para que inicies sesión
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.countryContainer}>
            <CountryPicker countryCode="MX" withFilter withCallingCode />
            <Entypo name="chevron-small-down" size={22} />
          </View>
          <View style={styles.phoneInputCont}>
            <CustomInput
              width="80%"
              selectionColor={'gray'}
              keyboardType="numeric"
              placeholder="2246589671"
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            buttonTitle="Enviar"
            color="#ffff"
            backgroundColor="#fdc500"
            onPress={() => console.log('Enviado')}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.orText}>O también</Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#0098FD',
              fontFamily: 'Inter-Bold',
              fontSize: 16,
            }}>
            Ingresa con tu E-mail
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  phoneInputCont: {
    flex: 0.9,
  },
  countryContainer: {
    flex: 0.2,
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    padding: 8,
    height: 50,
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
  orText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#a9a9a9',
  },
});
