import firebase from 'firebase/app'; 
import "firebase/firestore"; 


var firebaseConfig = {
    apiKey: "AIzaSyBarsEwEFWjtG7bxHWAtVUcAtcHF0NX3iI",
    authDomain: "vue-chat2-63f39.firebaseapp.com",
    databaseURL: "https://vue-chat2-63f39.firebaseio.com",
    projectId: "vue-chat2-63f39",
    storageBucket: "vue-chat2-63f39.appspot.com",
    messagingSenderId: "305341814605",
    appId: "1:305341814605:web:88e954ac5a9928ca19c904"
  };
  // Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore(); 
