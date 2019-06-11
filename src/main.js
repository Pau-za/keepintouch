// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDzfim0zJx50ISN8TEQ4PXKT56SAsNpx4w",
  authDomain: "keepintouch-eur.firebaseapp.com",
  databaseURL: "https://keepintouch-eur.firebaseio.com",
  projectId: "keepintouch-eur",
  storageBucket: "keepintouch-eur.appspot.com",
  messagingSenderId: "742570600819",
  appId: "1:742570600819:web:4346406c019b72c2"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
