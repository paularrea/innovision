import firebase from "firebase/app";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyBtwPCUgkSMFTE-UdU9PFYfSsFies7yjJQ",
    authDomain: "innovision-248ab.firebaseapp.com",
    databaseURL: "https://innovision-248ab.firebaseio.com",
    projectId: "innovision-248ab",
    storageBucket: "innovision-248ab.appspot.com",
    messagingSenderId: "666055681531",
    appId: "1:666055681531:web:9cd28c45d2cd2177f3175e",
    measurementId: "G-Z4VN52CLN1"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const storage = firebase.storage();

  export {
      storage, firebase as default
  }