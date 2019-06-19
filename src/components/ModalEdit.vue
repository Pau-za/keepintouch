<template>
  <div>
    <a class="waves-effect waves-light indigo darken-4 btn modal-trigger" href="#modal1" @click="modalFn()">Edit</a>

    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Edit post</h4>
        <input type="text">
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Accept</a>
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancell</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "modalEdit",
  methods: {
    modalFn() {
      const elems = document.querySelectorAll(".modal");
      const instance = M.Modal.getInstance(elems);
      const instances = M.Modal.init(elems);
    },
    ...mapActions(['getOnePost'])
  },
//   created(){
//       this.getOnePost(this.id)
//       //NEcesito identificar el id del post que el usuario quiera editar
//   }
};
</script>
