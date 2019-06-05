<template>
  <div>
    <md-list>
      <md-list-item>
        <ul>
          <li
            v-for="(fruit,index) of orderedArr"
            :key="index"
            @click="increment(index)"
            class="md-list-item-text"
          >
            {{fruit.name}}
            <span>{{fruit.quantity}}</span>
          </li>
          <button @click="reStart" class="md-fab">Reiniciar</button>
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
    ...mapState(["fruits"]),
    orderedArr(){
      return this.fruits.sort((a,b) => b.quantity - a.quantity)
    }
  },
  methods: {
    ...mapMutations(["increment", "reStart"])
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
