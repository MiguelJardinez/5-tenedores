import React, { useState, useEffect } from 'react';

//Importando firebase 
import * as firebase from 'firebase';

//Importando componentes de invitado y logueado
import UserGuest from './UserGuest'; 
import UserLogged from './UserLogged';

//Componentes reutilizables
import Loading from '../../components/Loading';


const Account = () => {

  const [ login, setLogin ] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      !user ? setLogin(false) : setLogin(true); 
    })
  }, [])

  if( login === null )  return <Loading isVisible={true} text="Cargando..."/>

  return login ? <UserLogged /> : <UserGuest />

}

export default Account
