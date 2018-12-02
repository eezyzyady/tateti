import Vue from 'vue'
import Router from 'vue-router'
//import bootstrap from '../node_modules/bootstrap/dist/css/'
import Home from './views/Home.vue'
import usuarios from './views/usuarios'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/usuarios',
      template:'<router-view></router-view>',
      children: [
        { //ruta por defecto de la seccion usuarios antes de jugar.
          path: '/',
          component: usuarios.usuario1,
          name: 'usuarios'
        },
        {
          path: 'usuario2',
          component: usuarios.usuario2,
          name: 'usuarios.usuario2'
        },
       
      ]
    },
  
    
    
  ],
})