import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Componentes para la vistas
import RestauranStack from './RestauranStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantStack from '../navigations/TopRestaurantStack';
import SearchStack from './SearchStack';
import AcountStack from './AcountStack';

//Iconos de la libreria
import { Icon } from 'react-native-elements';


const Tabs = createBottomTabNavigator(); 

const Navigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="restaurants"
      tabBarOptions={{
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >

      <Tabs.Screen 
        name="restaurants"
        component={RestauranStack}
        options={{
          title: "Restaurantes"
        }}
      />

      <Tabs.Screen 
        name="favorites"
        component={FavoritesStack}
        options={{
          title: "Favoritos"
        }}
      />

      <Tabs.Screen 
        name="top-restaurants"
        component={TopRestaurantStack}
        options={{
          title: "Top 5"
        }}
      />

      <Tabs.Screen 
        name="search"
        component={SearchStack}
        options={{
          title: "Buscar"
        }}
      />

      <Tabs.Screen 
        name="account"
        component={AcountStack}
        options={{
          title: "Cuenta"
        }}
      />

    </Tabs.Navigator>
  )
}

export default Navigation

function screenOptions( route, color ){
  let iconName; 
  switch ( route.name ){
    case "restaurants":
      iconName = "compass-outline"
      break;

    case "favorites":
      iconName = "heart-outline"
      break;

    case "top-restaurants":
      iconName = "star-outline"
      break;
      
    case "search":
      iconName = "magnify"
      break;

    case "account":
      iconName = "home-outline"
      break;
        
    default:
      break;
  }
  return (
    <Icon name = { iconName } size = {22} color= {color} type="material-community" />
  )
}
