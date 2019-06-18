import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import firebase from 'firebase';
import {
  fb
} from "./js/firebase";
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    createUser({
      commit
    }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          console.log(res.user.email);
          console.log(res.user.uid);
          commit('setUser', {
            email: res.user.email,
            uid: res.user.uid
          });
          router.push({
            name: 'feed'
          });
        })
        .catch((error) => {
          console.log(error.message);
          commit('setError', error.message);
        })
    },
    knownUser({
      commit
    }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res.user.uid);
        commit('setUser', {
          email: res.user.email,
          uid: res.user.uid
        });
        router.push({
          name: 'feed'
        });
      }).catch((error) => {
        console.log(error);
        commit('setError', error.message);
      });
    }
  }
})
