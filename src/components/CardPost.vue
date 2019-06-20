<template>
  <div>
    <div class="col s12 m7">
      <h2 class="header" v-for="post in posts" :key="post.id">{{post.name}}</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img class="profile-img" src="https://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p v-for="post of posts" :key="post.id">{{post.postContent}}</p>
          </div>
          <div class="card-action">
            <router-link v-for="post of posts" :key="post.id" :to="{name:'edit', params:{id: post.id}}">
              <button
                class="btn waves-effect waves-light light-blue darken-1"
                type="submit"
                name="action"
              >
                Edit
                <i class="material-icons right">edit</i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import modalEdit from "@/components/ModalEdit";

export default {
  name: "CardPost",
  // components:{
  //     modalEdit
  // },
  methods: {
    ...mapActions(["getPosts"]),
    getId() {
      const idDoc = document.getElementById(`${post.id}`);
      console.log(idDoc);
    }
  },
  created() {
    this.getPosts();
  },
  computed: {
    ...mapState(["posts"])
  }
};
</script>

<style scoped>
.profile-img {
  /* width: 50%; */
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  height: 25vh;
}
</style>
