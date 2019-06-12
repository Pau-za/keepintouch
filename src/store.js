import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import {fb} from "./js/firebase";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
        id: 'kmqiwje23',
        email: 'molo_pau@hotmail.com',
        name: 'pau'
      }
    ],
    posts: [{
      date: '12-03-19',
      content: 'hola, crayola',
      author: 'pau'
    }]
  },
  mutations: {
    increment(state, index) {
      state.fruits[index].quantity++;
    },
    reStart(state) {
      state.fruits.forEach(element => {
        element.quantity = 0;
      })
    },
    register() {
      fb.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  },
  actions: {

  }
})
