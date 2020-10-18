import React from 'react'
import { StyleSheet, Text, View } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

//importando el componentes
import Search from '../pages/Search'; 

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="search-stack"
        component={Search}
        options={{
          title: 'Buscar'
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})
