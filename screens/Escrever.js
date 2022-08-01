import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView
} from 'react-native';
import MeuEstilo from '../meuestilo'
import { auth,firestore } from '../firebase'

const Escrever = () => {
  const [casa,  setCasa] = useState('')
  const [lat,   setLat] = useState('')
  const [long,  setLong] = useState('')
  

  const enviarDados = () => {
     firestore
     .collection('Casa')
     .add({
       id:    user.uid,
       casa:  casa,
       lat:   lat, 
       long:  long, 
     })
     .then(() => {
       alert('Casa '+casa+' Adicionado com Sucesso')
       
     });
    
  }

  const limparFormulario = () => {
  
  }

  return (
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="casa"
          value={casa}
          onChangeText={text => setCasa(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Latitude"
          value={lat}
          onChangeText={text => setLat(text)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Longitude"
          value={long}
          onChangeText={text => setLong(text)}
          style={MeuEstilo.input}
        />
       
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity
          onPress={enviarDados}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever

