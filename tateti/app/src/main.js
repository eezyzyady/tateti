import Vue from 'vue'
import App from './App.vue'
import router from './router'
export const eventBus = new Vue();

//extendemos las instancias para crear los componentes

Vue.component('usuario1', {
  template:'<div>Usuario 1</div>'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
