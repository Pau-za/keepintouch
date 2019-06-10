<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/source">Source</router-link>
      <router-link to="/pictures/:id">Fotografías</router-link>
    </div>
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
  margin-top: 60px;
}
</style>
