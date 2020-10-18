import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as firebase from 'firebase';

//import Navegacion
import Navigation from './src/navigations/Navigation';

//Usamos firebase 
import { firebaseApp } from './src/utils/firebase';

export default function App() {

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });

  }, [])


  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
