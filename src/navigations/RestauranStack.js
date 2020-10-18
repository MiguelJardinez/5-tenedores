import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../pages/Restaurant'

const Stack = createStackNavigator();

const RestauranStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurant"
        component={Restaurant}
        options={{
          title: 'Restaurantes'
        }}
      />
    </Stack.Navigator>
  )
}

export default RestauranStack

const styles = StyleSheet.create({})
