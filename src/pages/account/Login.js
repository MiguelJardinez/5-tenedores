import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';

const Login = () => {
  return (
    <ScrollView>
      <Image 
        source={ require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Text>Login form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider}/>
      <Text>Social Login</Text>
    </ScrollView>
  )
}
export default Login

function CreateAccount() {
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      <Text 
        style={styles.btnRegister}
        onPress={() => console.log('Registrando')}
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
  },
  textRegister: {
    marginTop: 15,
    marginHorizontal: 10,
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
