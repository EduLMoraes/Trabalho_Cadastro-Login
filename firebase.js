// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyBcURm6wN3mA_wec2uHbpuUJ8ZZPmah73A",
  authDomain: "avaliacao-fb163.firebaseapp.com",
  projectId: "avaliacao-fb163",
  storageBucket: "avaliacao-fb163.appspot.com",
  messagingSenderId: "735165407992",
  appId: "1:735165407992:web:d18b5082215a83bf32110d"


};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };