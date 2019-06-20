<template>
  <div>
    <h1>General Feed</h1>
    <h3>Welcome {{user.displayName}}</h3>
    <!-- <p>{{ user.uid }}</p> -->
    <div class="posts">
      <PostArea/>
      <CardPost class="container"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostArea from "@/components/PostArea";
import CardPost from "@/components/CardPost";
export default {
  name: "Feed",
  components: {
    PostArea,
    CardPost
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped>
.posts{
    width:70%;
}
</style>
