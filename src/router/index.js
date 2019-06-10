import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/vews/Pruebavue'
import Source from '@/vews/Source'
import Pictures from '@/vews/Pictures'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Router)
Vue.use(VueMaterial)

//en este archivo únicamente se importan las vistas

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/source',
      name: 'Source',
      component: Source
    },
    { //Rutas dinámicas
      path: '/pictures/:id',
      name: 'pictures',
      component: Pictures
    }
  ]
})
