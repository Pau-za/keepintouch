<template>
  <div>
    <div class="row container">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
      </form>
      <div>
        <button
          class="btn waves-effect waves-light light-blue darken-1"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singinform"
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  width: 50%;
}
</style>


