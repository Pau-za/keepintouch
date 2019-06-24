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
    user: {
      displayName: null,
      lastName: null,
      email: null,
      uid: null,
      posts: null,
      nationality: null,
      interests: null
    },
    error: null,
    posts: [],
    post: {
      postContent: '',
      id: ''
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
    setOnlyPost(state, post) {
      state.post = post;
    },
    deletePostFromArr(state, id) {
      state.posts = state.posts.filter(post => {
        return post.id != id;
      })
    },
    // addNewPostToArr(state, post){
    //   state.posts = state.posts.push(post)
    //   return state.posts;
    // }
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
          db.collection(res.user.uid).add({
            email: res.user.email
          }).then(() => {
            router.replace('feed');
          })
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
    getOnePost({
      commit
    }, id) {
      db.collection("posts").doc(id).get()
        .then(doc => {
          console.log(doc.id);
          const post = doc.data();
          post.id = doc.id;
          console.log(post);
          commit('setOnlyPost', post);
        })
    },
    userInfo({commit},user){
      const currentUser = firebase.auth().currentUser();
      console.log(currentUser);
      db.collection(currentUser.uid).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let post = doc.data();
            post.id = doc.id;
            posts.push(post);
          });
        })
      commit('setPosts', posts);
    },
    addNewPost({
      commit
    }, postContent) {
      db.collection('posts').add({
          postContent: postContent
        })
        .then((doc) => {
          const id = doc.id;
          console.log(doc.id);
          postContent = '';
          // this.posts.push(doc)
          // commit('addNewPostToArr', doc);
          this.dispatch('getPosts')
        })
    },
    deletePost({
      commit
    }, id) {
      db.collection("posts").doc(id).delete()
        .then(() => {
          console.log('La tarea con el id' + id + 'fue eliminada con éxito');
          commit('deletePostFromArr', id);
        })
    },
    editAPost({
      commit
    }, post) {
      db.collection("posts").doc(post.id).update({
          postContent: post.postContent
        })
        .then(() => {
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
