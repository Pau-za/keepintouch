<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper grey darken-4">
        <a href="#" class="brand-logo right">
          <img src="./assets/MER_sm.png" alt="mer-logo" class="mer-logo">
        </a>
        <!-- Agregar botón de logout -->
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/" v-if="!isAUser">Home</router-link>
          </li>
          <li>
            <router-link to="/feed" v-if="isAUser">Feed</router-link>
          </li>
          <!-- <li>
            <router-link to="/pictures/:id">Fotografías</router-link>
          </li> -->
          <li>
            <a class="waves-effect waves-light btn light-blue darken-1" @click="signOut()">
              Sign out
              <i class="material-icons right">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(['signOut'])
  }, 
  computed:{
    ...mapGetters(['isAUser'])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 0%; */
}

.mer-logo {
  width: 50%;
}
</style>
