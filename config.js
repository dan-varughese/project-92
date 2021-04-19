import firebase from 'firebase';
require ('@firebase/firestore');



  var firebaseConfig = {
    apiKey: "AIzaSyCxl7kbX7MMSV6ADDKX7awKFQZLHO3_z6w",
    authDomain: "rfid-a7407.firebaseapp.com",
    projectId: "rfid-a7407",
    storageBucket: "rfid-a7407.appspot.com",
    messagingSenderId: "281559186908",
    appId: "1:281559186908:web:a6d79b7fe004b688686319"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore