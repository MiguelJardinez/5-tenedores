import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//componentes
import TopRestaurants from '../pages/TopRestaurants';

const Stack = createStackNavigator();

const TopRestaurantStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants-stack"
        component={TopRestaurants}
        options={{
          title: 'Top 5'
        }}
      />
    </Stack.Navigator>
  )
}

export default TopRestaurantStack

const styles = StyleSheet.create({})
