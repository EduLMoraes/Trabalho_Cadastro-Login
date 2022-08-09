import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { DrawerLayoutAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth,firestore } from '../firebase'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Cadastro from './Cadastro'
import Home from './HomeScreen'
import Escrever from './Escrever';
import Login from "./LoginScreen";
import ListarScreen from "./Listar";


const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const navigation = useNavigation()

  function LoginScreen(params) {
    return(
    <Login></Login>
    );
  }

 function EscreverScreen(params) {
  return(
    <Escrever></Escrever>
  );
 }

 function Listar(params) {
  return(
  <ListarScreen></ListarScreen>
  );
}

function Cadastrar(params){
  return(
        <Cadastro></Cadastro>
  );
}


 
  

  return (
      <Drawer.Navigator initinalRouteName="Home">
        <Drawer.Screen name="Home"              component={HomeScreen}/>
        <Drawer.Screen name="Login"             component={LoginScreen}/>
        <Drawer.Screen name="Escrever"          component={EscreverScreen}/>
        <Drawer.Screen name="Listar"            component={Listar}/>
        <Drawer.Screen name="Cadastrar"         component={Cadastrar} />
      </Drawer.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
