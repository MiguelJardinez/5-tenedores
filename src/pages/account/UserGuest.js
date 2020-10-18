import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const UserGuest = () => {
  
  //Importando la navegación 
  const navigation = useNavigation();


  return (
    <ScrollView
      centerContent={true}
      style={styles.viewBody}
    >
      <Image 
        source={ require('../../../assets/img/user-guest.jpg')}
        resizeMode='contain'
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
        <Text style={styles.description}>
          ¿Como describirias tu mejor restaurante? Busca y visualiza los mejores
          restaurantes de forma sencilla, vota por el que te haya gustado más y
          comenta cual ha sido tu experiencia
        </Text>
      </View>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={ styles.btnStyle }
          containerStyle={ styles.btnContainer }
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </ScrollView>
  )
}

export default UserGuest

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black'
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  btnStyle: {
    backgroundColor: '#00a680'
  },
  btnContainer: {
    width: '70%'
  },
  viewBtn: {
    alignItems: 'center'
  }
})
