<template>
  <div>
    <h1>Fotografías</h1>
    <router-link
      :to="{name: 'pictures', params: {id: pic}}"
      v-for="(pic,index) of picsArr"
      :key="index"
    >
      <button>Foto {{ pic }}</button>
    </router-link>
    <Dinamicpics/>
    <button @click="home">Volver al inicio</button>
    <button @click="previus">Atrás</button>
    <button @click="next">Adelante</button>
  </div>
</template>

<script>
import Dinamicpics from "@/components/Dinamicpics";

export default {
  name: "pictures",
  components: {
    Dinamicpics
  },
  data() {
    return {
      picsArr: [1, 2, 3, 4]
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    previus(){
        this.$router.go(-1);
    },
    next(){
        this.$router.go(1);
    }
  }
};
</script>

