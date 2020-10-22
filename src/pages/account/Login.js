import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';
import { useNavigation } from '@react-navigation/native'

//Componentes
import LoginForm from '../../components/account/LoginForm';

const Login = () => {

  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image 
        source={ require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
        />
      <View style={styles.viewContainer}>
        <View>
          <LoginForm style={styles.viewForm} toastRef={toastRef} />
          <CreateAccount />
        </View>
        <Divider style={styles.divider}/>
        <Text>Social Login</Text>
      </View>
      <Toast 
        ref={toastRef}
        position="center"
        opacity={0.9}
        useNativeDriver={false}
      />
    </KeyboardAwareScrollView>
  )
}
export default Login

function CreateAccount() {
  const navigation = useNavigation()

  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      <Text 
        style={styles.btnRegister}
        onPress={() => navigation.navigate('register')}
      > RESGITRATE</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginHorizontal: 40,
    marginVertical: 50
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
  divider: {
    backgroundColor: '#00a680',
    margin: 40
  }
})
