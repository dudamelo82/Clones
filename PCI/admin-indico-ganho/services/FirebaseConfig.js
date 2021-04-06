import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
     apiKey: "AIzaSyAijj3DK1_1dkFmPUT9s7jyLeWufObwuao",
     authDomain: "indico-ganho.firebaseapp.com",
     databaseURL: "https://indico-ganho-default-rtdb.firebaseio.com",
     projectId: "indico-ganho",
     storageBucket: "indico-ganho.appspot.com",
     messagingSenderId: "778304789235",
     appId: "1:778304789235:web:eff9983a31f79d73383586",
     measurementId: "G-V4LD4HM7KT"
   };
   // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const firedb = firebase.database().ref();