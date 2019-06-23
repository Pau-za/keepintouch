<template>
  <div class="container">
    <h3>Please edit your user information</h3>
    <div class="row">
      <form class="col s12" @submit.prevent="userInfo(user)">
        <div class="row">
          <div class="input-field col l6 m6 s6">
            <input id="first_name" type="text" class="validate" v-model="user.displayName">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col l6 m6 s6">
            <input id="last_name" type="text" class="validate" v-model="user.lastName">
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col l6 m6 s6">
            <input id="nationality" type="text" class="validate" v-model="user.nationality">
            <label for="nationality">Nationality</label>
          </div>
          <div class="input-field col l6 m6 s6">
            <input id="program" type="text" class="validate" v-model="user.interests">
            <label for="program">Interests</label>
          </div>
        </div>
      </form>
      <div>
        <button
          class="btn waves-effect waves-light indigo darken-4"
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
import { mapActions,mapState } from "vuex";
export default {
  name: "UserInformation",
  methods: {
      ...mapActions(['userInfo'])
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

