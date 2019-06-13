<template>
  <div>
    <div class="row container">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" name="email" class="validate">
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
             
            >
            <label for="password">Password</label>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col s12">
            This is an inline input field:
            <div class="input-field">
              <input id="email_inline" type="email" class="validate">
              <label for="email_inline">Email</label>
              <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>
          </div>
        </div>-->
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
// import submitbtn from "@/components/Submitbtn";


export default {
  name: "Loginform",
  
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  width: 50%;
}
</style>


