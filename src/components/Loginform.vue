<template>
  <div>
    <div class="row container">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" name="email" class="validate" v-model="email">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              name="password"
              class="validate"
              v-model="password"
            >
            <label for="password">Password</label>
          </div>
        </div>
      </form>
      <div>
        <button
          class="btn waves-effect waves-light indigo darken-4"
          type="submit"
          name="action"
          @click="knownUser({email, password})"
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
// import submitbtn from "@/components/Submitbtn";
import { mapActions, mapState } from "vuex";

export default {
  name: "Loginform",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["knownUser"])
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  width: 50%;
}
</style>


