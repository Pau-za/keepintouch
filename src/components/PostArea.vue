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
              @click="convert()"
            >
              Post
              <i class="material-icons right">send</i>
            </button>
            acá está la url {{postContent}}
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
      postContent: "",
      postWithURL: ""
    };
  },
  methods: {
    ...mapActions(["addNewPost"]),
    clearTextArea() {
      this.postContent = "";
    },
    convert() {
      // var text=document.getElementById("url").value;
      const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
      this.postWithURL = this.postContent.replace(exp, "<a href='$1'>$1</a>");
      const exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      this.postContent = this.postWithURL.replace(
        exp2,
        `${1}<a target="_blank" href="http://${2}">${2}</a>`
      );
      console.log(this.postContent);
    }
  }
};
</script>

