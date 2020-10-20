import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { size, isEmpty } from 'lodash';

import { validateEmail } from '../../utils/Validations';

const RegisterForm = () => {

  const [ showPassword, setShowPassword ] = useState(true)
  const [ showPasswordRepeat, setShowPasswordRepeat ] = useState(true)
  const [ formData, setFormData ] = useState(defaultFormValue());

  const onSubmit = () => {
    if( isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){
      console.log('Todos los campos son obligatorios');
    } else if(!validateEmail(formData.email)) {
      console.log('El correo electronico no es valido');
    } else if ( formData.password !== formData.repeatPassword ) {
      console.log('Las contraseñas no coinciden')
    } else if ( size(formData.password ) < 6){
      console.log('La contraseña debe ser mayor a 6 caracteres')
    } else {
      console.log('okey')
    }
    
  }

  const onChange = (e, type) => {
    setFormData({
      ...formData, [type]: e.nativeEvent.text
    })
  }

  return (
    <View style={styles.formContainer}>
      <Input 
        placeholder='Correo electrónico'
        containerStyle={styles.inputForm}
        onChange={ e => onChange( e, 'email' )}
        email={true}
        rightIcon={
          <Icon 
          type='material-community'
          name='at'
          iconStyle={styles.iconRight}
          />
        }
        />
      <Input 
        placeholder='Contraseña'
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword}
        onChange={ e => onChange( e, 'password' )}
        rightIcon={
          <Icon 
          type='material-community'
          name='eye-outline'
          iconStyle={styles.iconRight}
          onPress={() => setShowPassword(!showPassword)}
          />
        }
        />
      <Input 
        placeholder='Repetir contraseña'
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPasswordRepeat}
        onChange={ e => onChange( e, 'repeatPassword' )}
        rightIcon={
          <Icon 
            type='material-community'
            name='eye-outline'
            iconStyle={styles.iconRight}
            onPress={() => setShowPasswordRepeat(!showPasswordRepeat)}
          />
        }
      />
      <Button 
        title='Hola mundo'
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
    </View>
  )
}

export default RegisterForm

function defaultFormValue() {
  return {
    email: '',
    password: '',
    repeatPassword: ''
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  inputForm: {
    width: '100%',
    marginTop: 10
  },
  btnContainerRegister: {
    width: '95%',
    marginTop: 10
  },
  btnRegister: {
    backgroundColor: '#00a680'
  },
  iconRight:{
    color: '#c1c1c1'
  }
})
