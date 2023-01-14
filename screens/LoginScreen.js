import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext, useMemo, useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {AuthContext} from '../utils/AuthContext';

const LoginScreen = () => {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setLoading(false);
  };

  const isFormValid = useMemo(() => {
    return email.length > 0 && password.length > 0;
  }, [email, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={{backgroundColor: 'white', height: '100%', flex: 1}}>
        <View style={styles.askContainer}>
          <Text style={styles.askTitle}>Bienvenido de nuevo</Text>
          <Text style={styles.askSubtitle}>
            Ingresa tus datos para iniciar sesión
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.emailInputCont}>
            <CustomInput
              width="80%"
              selectionColor={'gray'}
              onChangeText={userEmail => setEmail(userEmail)}
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="ejemplo@gmail.com"
            />
          </View>

          <View style={styles.emailInputCont}>
            <CustomInput
              labelValue={password}
              onChangeText={userPassword => setPassword(userPassword)}
              width="80%"
              selectionColor={'gray'}
              keyboardType="text"
              placeholder="Contraseña"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <CustomButton
            buttonTitle="Ingresar"
            color="#ffff"
            backgroundColor="#fdc500"
            onPress={() => login(email, password)}
            disabled={!isFormValid}
          />
        </View>
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
    flexDirection: 'column',
  },
  emailInputCont: {
    margin: 5,
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
