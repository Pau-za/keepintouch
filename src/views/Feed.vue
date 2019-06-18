<template>
  <div>
    <h1>General Feed</h1>
    <h3>Welcome {{user.displayName}}</h3>
    <p>{{ user.uid }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'Feed',
    computed: {
        ...mapState(['user'])
    }
}
</script>
