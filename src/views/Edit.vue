<template>
  <div class="container">
    <h3>Edit your post</h3>
    <form @submit="editAPost(post)">
      {{post}}
      <input type="text" v-model="post.postContent">
      <button class="btn waves-effect waves-light light-blue darken-1" type="submit" name="action">
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
    ...mapActions(['getOnePost','editAPost'])
  },
  created(){
    this.getOnePost(this.id)
  },
  computed:{
    ...mapState(['post'])
  }
};
</script>
