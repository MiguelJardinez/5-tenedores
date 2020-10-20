import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Componentes
import RegisterForm from '../../components/account/RegisterForm'

const Register = () => {
  return (
    <KeyboardAwareScrollView>
      <Image 
        source={ require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Register

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
  }
})
