import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';


const UserLogged = () => {

  return (
    <View>
      <Text>Soy la pagina de usuario</Text>
      <Button 
        title='Cerrar sesión'
        onPress={ () => firebase.auth().signOut() }
      />
    </View>
  )
}

export default UserLogged

const styles = StyleSheet.create({})
