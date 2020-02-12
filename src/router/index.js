import Vue from 'vue';
import Router from 'vue-router';
import Feed from '@/views/Feed';
import VueMaterial from 'vue-material';
import login from '@/views/Login';
import Edit from '@/views/Edit';
import UserInformation from '@/views/UserInformation';

// import 'vue-material/dist/vue-material.min.css';
import firebase from 'firebase';


Vue.use(Router)
Vue.use(VueMaterial)

//en este archivo únicamente se importan las vistas

const router = new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
      meta: {
        requiresAuth: true
      }
    },
    { //Rutas dinámicas
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/userInformation',
      name: 'UserInformation',
      component: UserInformation,
      meta: {
        requiresAuth: true
      }
    }

  ]
})

//evaluando si hay alguna ruta protegida :D
router.beforeEach((to, from, next) => {
  const needsAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser;
  if (needsAuth && !user) {
    next('/');
  } else {
    next();
  }
})

export default router
