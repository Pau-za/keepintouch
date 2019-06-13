<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper indigo darken-4">
        <a href="#" class="brand-logo right">
          <img src="./assets/filled-logo.png" alt="mer-logo" class="mer-logo">
        </a>
        <!-- Agregar botón de logout -->
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/feed">Feed</router-link>
          </li>
          <li>
            <router-link to="/pictures/:id">Fotografías</router-link>
          </li>
          <li>
            <a class="waves-effect waves-light btn light-blue darken-1" @click="logout()">
              Sign out
              <i class="material-icons right">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div></div>
    <router-view/>
    <!-- Acá abajo importo el componente List dentro del html -->
  </div>
</template>

<script>
// import Source from '@/components/List'
import { fb } from "./js/firebase";

export default {
  name: "App",
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
          console.log('usuario salió de la app existosamente');
        })
        .catch(error => {
          console.log(error);
        });
    }
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
