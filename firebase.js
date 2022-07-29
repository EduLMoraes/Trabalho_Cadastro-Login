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
  
  apiKey: "AIzaSyDu6-wbaRX5oPtC7yN1PtiPhKUsNoTg2O0",
  authDomain: "duplasolo-ec658.firebaseapp.com",
  projectId: "duplasolo-ec658",
  storageBucket: "duplasolo-ec658.appspot.com",
  messagingSenderId: "581355251334",
  appId: "1:581355251334:web:a3b7e51c02a3b849b3d307"
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