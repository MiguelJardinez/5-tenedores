import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//importando las vistas 
import Account from '../pages/account/Account';
import Login from '../pages/account/Login';

const Stack = createStackNavigator();

const AcountStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="restaurant"
        component={Account}
        options={{
          title: 'Cuenta'
        }}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Iniciar Sesión'
        }}
      />

    </Stack.Navigator>
  )
}

export default AcountStack

const styles = StyleSheet.create({})
