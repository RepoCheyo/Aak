import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const AuthScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        {/* <Image
          style={styles.imgLogo}
          source={require('../assets/images/helmet-3d.webp')}
        /> */}
        <Text style={styles.textLogo}>FastFix</Text>
        <Text style={styles.subLogoText}>
          Tus pendientes en casa solucionados con un tap
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonTitle="Inicia Sesión"
          color="#ffff"
          backgroundColor="#fdc500"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          buttonTitle="¿No tienes cuenta? Registrate"
          color="#000"
          backgroundColor="#EDEDEE"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#ffff',
  },
  logoContainer: {
    alignItems: 'center',
    height: '65%',
  },
  textLogo: {
    fontFamily: 'Inter-Black',
    fontSize: 100,
    color: '#f0f0f0',
    textAlign: 'center',
  },
  subLogoText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#000',
  },
  // imgLogo: {
  //   width: 300,
  //   height: 300,
  // },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
});

export default AuthScreen;
