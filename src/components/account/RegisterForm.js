import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size, isEmpty } from 'lodash';
import * as firebase from 'firebase';

import { validateEmail } from '../../utils/Validations';

//componentes
import Loading from '../Loading';

const RegisterForm = ({ toastRef }) => {

  
  const [ showPassword, setShowPassword ] = useState(true)
  const [ showPasswordRepeat, setShowPasswordRepeat ] = useState(true)
  const [ formData, setFormData ] = useState(defaultFormValue());
  const [ loading, setLoading] = useState(false)
  const navigation = useNavigation();

  const onSubmit = () => {
    if( isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){
      toastRef.current.show('Todos los campos son obligatorios');
    } else if(!validateEmail(formData.email)) {
      toastRef.current.show('El correo electronico no es valido');
    } else if ( formData.password !== formData.repeatPassword ) {
      toastRef.current.show('Las contraseñas no coinciden')
    } else if ( size(formData.password ) < 6){
      toastRef.current.show('La contraseña debe ser mayor a 6 caracteres')
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword( formData.email, formData.password )
        .then( () => {
          setLoading(false);
          navigation.navigate("accountStack");
        })
        .catch( () => {
          setLoading(false)
          toastRef.current.show('El usuario ya existe pruebe con otro')
        })
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
      <Loading isVisible={loading} text='Creando cuenta'/>
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
