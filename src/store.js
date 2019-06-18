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
            uid: res.user.uid,
            displayName: res.user.displayName
          });
          router.replace('feed');
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
          router.replace('feed');
        }).catch((error) => {
          console.log(error);
          commit('setError', error.message);
        });
    },
    observer({
      commit
    }, payload) {
      if(payload != null){
        commit('setUser', {
          email: payload.email,
          uid: payload.uid,
          displayName: payload.displayName
        })
      }else{
        commit('setUser', null)
      }
    },
    signOut({commit}){
      firebase.auth().signOut();
      commit('setUser',null);
      router.replace('/');
    }
  },
  getters:{
    isAUser(state){
      if(state.user === null || state.user === '' || state.user === undefined){
        return false;
      }else{
        return true;
      }
    }
  }
})
