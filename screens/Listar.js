import React ,{useState, useEffect} from 'react'
import {ActivityIndicator, SafeAreaView, View, FlatList, MeuEstiloheet, Text, StatusBar } from 'react-native';
import { auth, firestore } from '../firebase'
import MeuEstilo from '../meuestilo';

const Listar = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [casas, setCasas] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore.collection('Casa')
      .onSnapshot(querySnapshot => {
        const casas = [];
        querySnapshot.forEach(documentSnapshot => {
          casas.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.nome,
          });
        });
        setCasas(casas);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

const Item = ({ nome }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>{nome}</Text>
  </View>
);

 

  const renderItem = ({ item }) => <Item nome={item.nome} />;

  // const getcasas= ()=>{
  //   setGatos([]);
  //   firestore
  //   .collection('Helicoptero')
  //   .onSnapshot(querySnapshot=>{
  //     //querySnapshot.forEach(documentSnapshot=>{
  //     querySnapshot.docChanges().forEach(change=>{
        
  //       casas.push({...change.doc.data(),
  //         key: change.nome,
  //       });
  //     });
  //     setCasas(casas);
  //     // setCarregando(false);
  //   });
  //   // return()=>subscriber();
  // };

  // // const observador = firestore.collection('Helicoptero')
  // // .onSnapshot(querySnapshot => {
  // //   querySnapshot.docChanges().forEach(change => {
  // //     if (change.type === 'added') {
  // //       console.log('Novo Helicoptero: ', change.doc.data());
  // //     }
  // //     if (change.type === 'modified') {
  // //       console.log('Helicoptero modificado: ', change.doc.data());
  // //     }
  // //     if (change.type === 'removed') {
  // //       console.log('Helicoptero removido: ', change.doc.data());
  // //     }
  // //   });
  // // });

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList 
      data={casass} 
      renderItem={renderItem} 
      keyExtractor={item => item.nome} 
      // refreshing={true}
      // onRefresh={() => {
      //   getcasas();
      // }}
      />
    </SafeAreaView>
  );
};

// const MeuEstilo = MeuEstiloheet.create({
//   containerlistar: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#0782F9',
//     fontWeight: '700',
//   },
// });

export default Listar;
