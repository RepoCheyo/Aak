import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {windowHeight} from '../utils/Dimentions';

const AuthScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/Handyman-Service-bg.jpg')}>
        <View style={styles.logoContainer}>
          <Text style={styles.textLogo}>FastFix</Text>
          <Text style={styles.subLogoText}>
            Tus pendientes en casa solucionados con un tap
          </Text>
        </View>
      </ImageBackground>
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '65%',
    backgroundColor: '#000000c0',
    top: windowHeight / 10,
  },
  textLogo: {
    fontFamily: 'Inter-Black',
    fontSize: 100,
    color: '#fdc500',
    textAlign: 'center',
  },
  subLogoText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#f0f0f0',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    height: '35%',
  },
});

export default AuthScreen;
