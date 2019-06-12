import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/vews/Pruebavue'
import Feed from '@/views/Feed'
import Pictures from '@/views/Pictures'
import VueMaterial from 'vue-material'
import login from '@/views/Login'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Router)
Vue.use(VueMaterial)

//en este archivo únicamente se importan las vistas

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    { //Rutas dinámicas
      path: '/pictures/:id',
      name: 'pictures',
      component: Pictures
    }
  ]
})
