import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//importando componentes
import Favorites from '../pages/Favorites';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="favorites-stack"
        component={Favorites}
        options={{
          title: 'Favoritos'
        }}
      />
    </Stack.Navigator>
  )
}

export default FavoritesStack

const styles = StyleSheet.create({})
