// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAnPnsYkwJyUR0QnRaRfjv6CZJiRqoopjY",
    authDomain: "twitter-clone-4c550.firebaseapp.com",
    projectId: "twitter-clone-4c550",
    storageBucket: "twitter-clone-4c550.appspot.com",
    messagingSenderId: "219036143751",
    appId: "1:219036143751:web:704858ef43714c589de822",
    measurementId: "G-YJMJ463PPV"
  };

  //const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db;