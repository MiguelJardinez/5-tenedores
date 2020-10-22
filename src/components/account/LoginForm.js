import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size, isEmpty } from 'lodash';
import { validateEmail } from '../../utils/Validations';
import * as firebase from 'firebase'; 

//Componentes
import Loading from '../Loading';

const LoginForm = ({ toastRef }) => {


  const [ formData, setFormData ] = useState(defaultFormValue());
  const [ showPassword, setShowPassword ] = useState(true);
  const [ loading, setLoading] = useState(false)
  const navigation = useNavigation();

  const onSubmit = () => {
    if( isEmpty(formData.password) || isEmpty(formData.email) ) {
      toastRef.current.show('Todos los campos son obligatorios');
    } else if(!validateEmail(formData.email)) {
      toastRef.current.show('El correo electronico no es valido');
    } else if ( size(formData.password) < 6) {
      toastRef.current.show('La contraseña debe ser mayor a 6 caracteres');
    } else {
      setLoading(true);
      console.log(formData)
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then( () => {
          setLoading(false);
          navigation.navigate('accountStack');
        })
        .catch( err => {
          setLoading(false);
          console.log(err);
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
        placeholder="Correo electrónico"
        onChange={ e => onChange(e, 'email')}
        email={true}
        rightIcon={
          <Icon 
            type="material-community"
            name='at'
            iconStyle={ styles.iconRight }
          />
        }
      />
      <Input 
        placeholder="Contraseña"
        onChange={ e => onChange(e, 'password')}
        password={true}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon 
            type="material-community"
            name="eye-outline"
            onPress={() => setShowPassword(!showPassword)}
            iconStyle={ styles.iconRight }
          />
        }
      />
      <Button 
        title="Ingresar"
        onPress={onSubmit}
        buttonStyle={ styles.btnLogin }
        containerStyle={ styles.btnContainerLogin }
      />
      <Loading isVisible={loading} text="Ingresando a cuenta"/>
    </View>
  )
}

export default LoginForm

function defaultFormValue() {
  return {
    email: "",
    password: ""
  }
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center'
  },
  btnLogin: {
    backgroundColor: '#00a680'
  },
  btnContainerLogin: {
    width: '95%',
    marginTop: 10
  },
  iconRight: {
    color: '#c1c1c1'
  }
})
