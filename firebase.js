import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBIJnyysTRSDf3wAm16lIWwhU2BQcAFsUQ",
    authDomain: "uitmnr-fb1b5.firebaseapp.com",
    projectId: "uitmnr-fb1b5",
    storageBucket: "uitmnr-fb1b5.appspot.com",
    messagingSenderId: "249558909299",
    appId: "1:249558909299:web:7e8543394d4ae86727c506",
    measurementId: "${config.measurementId}"
  };

 
  let app;
// we do this if to not keep on repeating on initializing the app if it has already been initialize
  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  } else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export { db, auth, storage};