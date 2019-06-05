<template>
  <div>
    <md-list>
      <md-list-item>
        <ul>
          <li v-for="(fruit,index) of fruits" :key="index" @click="increment(index)"
          class="md-list-item-text">
            {{fruit.name}}
            <span>{{fruit.quantity}}</span>
          </li>
        </ul>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import store from "../store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["fruits"])
  },
  methods:{
    ...mapMutations(["increment"])
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
