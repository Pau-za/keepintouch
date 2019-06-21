<template>
  <div>
    <div>
      <form @submit.prevent="addNewPost(postContent),clearTextArea()">
        <div class="row">
          <div class="input-field">
            <textarea id="textarea1" class="materialize-textarea" v-model="postContent"></textarea>
            <label for="textarea1">What are you thinking?</label>
            <button
              class="btn waves-effect waves-light light-blue darken-1"
              type="submit"
              name="action"
            >
              Post
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

