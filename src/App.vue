<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper light-blue darken-1">
        <a href="#" class="brand-logo right">Logo</a>
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

export default {
  name: "App"
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
</style>
