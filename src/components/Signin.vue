<template>
  <div>
    <div class="row container">
      <form class="col s12" >
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" v-model="displaytName">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" v-model="lastName">
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" v-model="password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" v-model="passwordConfirmation">
            <label for="password">Confirm your password</label>
          </div>
        </div>
      </form>
      <div>
        <button
          class="btn waves-effect waves-light light-blue darken-1"
          type="submit"
          name="action"
          :disabled="!checkPassword"
          @click="createUser({email:email,password:password})"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
    <p>{{ error }}</p>
  </div>
</template>

<script>
// import store from "../store";
import { mapActions, mapState } from "vuex";
// import { fb } from "../js/firebase";

export default {
  name: "Singinform",
  props: {
    msj: String
  },
  data() {
    return {
        displayName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirmation: null
    };
  },
  methods: {
    ...mapActions(['createUser'])
  },
  computed:{
   ...mapState(['error']),
   checkPassword(){
     return this.password === this.passwordConfirmation;
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


