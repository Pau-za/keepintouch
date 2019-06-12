<template>
  <div>
    <div class="row container">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="user.email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" v-model="user.password">
            <label for="password">Password</label>
          </div>
        </div>
      </form>
      <div>
        <button
          class="btn waves-effect waves-light light-blue darken-1"
          type="submit"
          name="action"
          @click="register()"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../store";
// import { mapState, mapMutations } from "vuex";
import { fb } from "../js/firebase";
export default {
  name: "Singinform",
  props: {
    msj: String
  },
  data() {
    return {
      user: {
        firstName: null,
        lastName: null,
        email: null,
        password: null
      }
    };
  },
  methods: {
    // ...mapMutations(["register"]),
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      console.log("registro exitoso.");
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  width: 50%;
}
</style>


