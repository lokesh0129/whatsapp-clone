import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 import "firebase/storage"
import "firebase/database"
import  initializeApp  from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5cYQL6pTGsW_WzplzK1etaUpn00vzA-4",
  authDomain: "whats-app-new-735ec.firebaseapp.com",
  projectId: "whats-app-new-735ec",
  storageBucket: "whats-app-new-735ec.appspot.com",
  messagingSenderId: "1089024607836",
  appId: "1:1089024607836:web:c3fe0c030d81ac6a924899",
  measurementId: "G-HTVYL1LVDS"
};

   const firebaseApp = firebase.initializeApp(firebaseConfig)
   const db = firebaseApp.firestore()
   const auth = firebase.auth()
   const provider = new firebase.auth.GoogleAuthProvider()

   export { auth , provider}
   export default db