import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useMemo, useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {AuthContext} from '../utils/AuthContext';
import ProfilePicture from '../components/ProfilePicture';

const SignUpScreen = () => {
  const {singUpCustomer} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const isFormValid = useMemo(() => {
    return email.length > 0 && password.length > 0 && username.length > 0;
  }, [email, password, username]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={{backgroundColor: 'white', height: '100%', flex: 1}}>
        <View style={styles.askContainer}>
          <Text style={styles.askTitle}>Creemos tu cuenta</Text>
          <Text style={styles.askSubtitle}>
            Ingresa tus datos para registrarte
          </Text>
        </View>

        <ProfilePicture
          source={require('../assets/images/defaultProfilePicture.jpg')}
        />

        <View style={styles.inputsContainer}>
          <View style={styles.emailInputCont}>
            <CustomInput
              labelValue={username}
              onChangeText={name => setUserName(name)}
              width="80%"
              selectionColor={'gray'}
              keyboardType="text"
              placeholder="Nombre"
            />
          </View>

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
            buttonTitle={loading ? 'Ingresando' : 'Listo!'}
            color="#ffff"
            backgroundColor={isFormValid ? '#fdc500' : '#ffec5c'}
            onPress={() => singUpCustomer(email, password, username)}
            disabled={!isFormValid}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

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
  fgpassword: {
    fontFamily: 'Inter-Bold',
    color: '#0099FB',
  },
});
