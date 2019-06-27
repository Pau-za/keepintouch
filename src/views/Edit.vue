<template>
  <div class="container">
    <h3>Edit your post</h3>
    <form @submit="editAPost(post)">
      <input type="text" v-model="post.postContent">
      <button class="btn waves-effect waves-light light-blue darken-1" type="submit" name="action" @click="convert()">
        Edit
        <i class="material-icons right">edit</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Edit",
  data(){
    return{
      id: this.$route.params.id
    }
  },
  methods:{
    ...mapActions(['getOnePost','editAPost']),
      convert() {
      // var text=document.getElementById("url").value;
      const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
      this.postWithURL = this.post.postContent.replace(exp, "<a target='_blank' href='$1'>$1</a>");
      const exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      this.post.postContent = this.postWithURL.replace(
        exp2,
        '$1<a target="_blank" href="http://$2">$2</a>'
      );
      console.log(this.post.postContent);
    }
  },
  created(){
    this.getOnePost(this.id);
    
  },
  computed:{
    ...mapState(['post'])
  }
};
</script>
