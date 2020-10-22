import React, { useRef } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-easy-toast';
import { useNavigation } from '@react-navigation/native';

//Componentes
import RegisterForm from '../../components/account/RegisterForm'

const Register = () => {

  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image 
        source={ require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
        <LoginAccount />
      </View>
      <Toast 
        ref={toastRef}
        position="center"
        opacity={0.9}
        useNativeDriver={true}
      />
    </KeyboardAwareScrollView>
  )
}

export default Register

function LoginAccount() {
  const navigation = useNavigation()

  return (
    <Text style={styles.textRegister}>
      ¿Ya tienes una cuenta?
      <Text 
        style={styles.btnRegister}
        onPress={() => navigation.navigate('login')}
      > IDENTIFICATE</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20
  },
  viewForm: {
    marginHorizontal: 40,
  },
  divider: {
    backgroundColor: '#00a680',
    marginVertical: 5
  },
  textRegister: {
    marginTop: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  btnRegister: {
    fontWeight: 'bold',
    color: '#00a680'
  },
})
