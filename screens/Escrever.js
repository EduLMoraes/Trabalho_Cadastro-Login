import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView
} from 'react-native';
import MeuEstilo from '../meuestilo'
import { auth,firestore } from '../firebase'

const Escrever = () => {
  const [helicoptero,  setHelicoptero] = useState('')
  const [modelo,   setModelo] = useState('')
  
  const ref = firestore.collection('User').doc(auth.currentUser.uid).collection('Helicoptero').doc()

  const enviarDados = () => {
     ref.set({
       helicoptero:  helicoptero,
       modelo:   modelo, 
       id: ref.id, 
     })
     .then(() => {
       alert('helicoptero '+helicoptero+' Adicionado com Sucesso')
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
          placeholder="helicoptero"
          value={helicoptero}
          onChangeText={text => setHelicoptero(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="modelo"
          value={modelo}
          onChangeText={text => setModelo(text)}
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

