import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC-d0e387V_al0yiPHB679rQWA0nPJONFo",
  authDomain: "noteapp-fcd90.firebaseapp.com",
  projectId: "noteapp-fcd90",
  storageBucket: "noteapp-fcd90.appspot.com",
  messagingSenderId: "336749399055",
  appId: "1:336749399055:web:32df0ae4513b2ca8c2677a"
});

const FIREBASE = firebase;

export default FIREBASE;