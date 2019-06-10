<template>
  <div>
    <h3>Welcome to KeepInTouch</h3>
    <h5>Do you have an account?</h5>
    <router-link to="//login">
      <a class="waves-effect waves-light btn-large light-blue darken-1"
      v-if: @click="show != show">Login</a>
    </router-link>
    <router-link to="//register">
      <a class="waves-effect waves-light btn-large light-blue darken-1">Register</a>
    </router-link>
    <Loginform/>
  </div>
</template>

<script>
import Loginform from "@/components/Loginform";
export default {
  name: "login",
  components: {
    Loginform
  },
  data:{
      show: false,
  }
};
</script>

