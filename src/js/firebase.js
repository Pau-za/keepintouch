import firebase from 'firebase'
// const firebase = require('firebase/app');
// require('firebase/firestore');

const config = {
    apiKey: "AIzaSyDzfim0zJx50ISN8TEQ4PXKT56SAsNpx4w",
    authDomain: "keepintouch-eur.firebaseapp.com",
    databaseURL: "https://keepintouch-eur.firebaseio.com",
    projectId: "keepintouch-eur",
    storageBucket: "keepintouch-eur.appspot.com",
    messagingSenderId: "742570600819",
    appId: "1:742570600819:web:4346406c019b72c2"
  };
  
  const fb = firebase.initializeApp(config);

  export {fb};
  
  