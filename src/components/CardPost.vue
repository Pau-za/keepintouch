<template>
  <div>
    <div class="col s12 m7">
      <!-- <h2 class="header">Horizontal Card</h2> -->
      <div class="card horizontal">
        <div class="card-image">
          <img class="profile-img" src="https://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "CardPost",
  methods:{
      ...mapActions(['getPosts'])
  },
  created(){
      this.getPosts()
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
