import firebase from 'firebase'
import {
  create
} from 'domain';
import store from '@/store'
import router from '../router';
// const firebase = require('firebase/app');
import firestore from 'firebase/firestore';

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

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    router.replace('feed');
    store.dispatch('observer', {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    });
  } else {
    store.dispatch('observer', null);
  }
})

const db = firebase.firestore(fb);

// export default fb.firestore();

export default db
