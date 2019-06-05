import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [{
        name: 'orange', 
        quantity: 0
      },
      {
        name: 'banana',
        quantity: 0
      },
      {
        name: 'melon',
        quantity: 0
      },
      {
        name: 'mango',
        quantity: 0
      }
    ]
  },
  mutations: {
    increment(state, index){
      state.fruits[index].quantity ++;
    },
    reStart(state){
      state.fruits.forEach(element => {
        element.quantity = 0;
      })
    }
  },
  actions: {

  }
})
