import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import firebase from 'firebase';
import db from "./js/firebase";
import router from './router'
// import  from './js/firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    posts: [],
    post:{
      postContent: null,
      id: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setOnlyPost(state, post){
      state.post = post;
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
            // displayName: res.user.displayName
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
      if (payload != null) {
        commit('setUser', {
          email: payload.email,
          uid: payload.uid,
          displayName: payload.displayName
        })
      } else {
        commit('setUser', null)
      }
    },
    signOut({
      commit
    }) {
      firebase.auth().signOut();
      commit('setUser', null);
      router.replace('/');
    },
    getPosts({
      commit
    }) {
      const posts = [];
      db.collection("posts").get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let post = doc.data();
            post.id = doc.id;
            posts.push(post);
          });
        })
      commit('setPosts', posts);
    },
    getOnePost({commit}, id){
      db.collection("posts").doc(id).get()
      .then(doc => {
        // console.log(doc.data());
        // console.log(doc.id);
        let post = doc.data();
        post.id = doc.id;
        commit('setOnlyPost', post);
      })
    },
    addNewPost({commit},postContent){
      db.collection('posts').add({
        postContent:postContent
      })
      .then((doc) => {
        console.log(doc.id);
      })
    },
    editAPost({commit}, post){
      db.collection("posts").doc(post.id).update({
        postContent: post.postContent
      })
      .then(()=>{
        router.push('/feed')
      })
    }
  },
  getters: {
    isAUser(state) {
      if (state.user === null || state.user === '' || state.user === undefined) {
        return false;
      } else {
        return true;
      }
    }
  }
})
