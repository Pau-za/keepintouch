<template>
  <div>
    <div class="row container">
      <form class="col s12" @submit.prevent="addNewPost(postContent),clearTextArea()">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model="postContent"></textarea>
            <label for="textarea1">What are you thinking?</label>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostArea",
  data() {
    return {
      postContent: '',
    

    };
  },
  methods: {
    ...mapActions(["addNewPost"]),
    clearTextArea(){
      this.postContent = '';
    }
  }
};
</script>

