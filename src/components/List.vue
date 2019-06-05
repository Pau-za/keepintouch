<template>
  <div>
    <md-list>
      <md-list-item>
        <li v-for="fruit of fruits" class="md-list-item-text">{{fruit.name}} <p>{{fruit.quantity}}</p></li>
        <!-- <span v-for="fruit of fruits" class="md-list-item-text">{{fruit.quantity}}</span> -->
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["fruits"])
  }
};
</script>

<style scoped>
.md-list {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(#000, 0.12);
}
</style>
