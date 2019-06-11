<template>
  <div>
    <h3>Welcome to KeepInTouch</h3>
    <h5>Do you have an account?</h5>
    
      <a class="waves-effect waves-light btn-large light-blue darken-1"
      @click="login =! login">Login</a>
    
      <a class="waves-effect waves-light btn-large light-blue darken-1"
      @click="signIn =! signIn">Sign in</a>
    
    <Loginform v-if="login === true"/>
    <Signinform v-if="signIn === true"/>
 <!-- Necesito descubrir cómo hacer que cuando de click a un botón, desaparezca el otro componente -->
  </div>
</template>

<script>
import Loginform from "@/components/Loginform";
import Signinform from "@/components/Signin";
export default {
  name: "login",
  components: {
    Loginform,
    Signinform
  },
  data() {
    return {
      login : false,
      signIn : false,
    };
  }
};
</script>

