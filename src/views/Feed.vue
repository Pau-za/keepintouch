<template>
  <div class="container">
    <h1>General Feed</h1>
    <h3>Welcome {{user.displayName}}</h3>
    <!-- <p>{{ user.uid }}</p> -->
    <div class="row">
      <div class="col s12 m7 l7">
        <PostArea/>
        <CardPost />
      </div>
      <div class="col s12 m5 l5">
        <ShowNews/>
      </div>
    </div>
  
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostArea from "@/components/PostArea";
import CardPost from "@/components/CardPost";
import ShowNews from "@/components/ShowNews";
export default {
  name: "Feed",
  components: {
    PostArea,
    CardPost,
    ShowNews
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped>
/* .posts {
  width: 70%;
} */
</style>
