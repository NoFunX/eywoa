import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
// import VueGoogleMaps from 'vue2-google-maps'
// Vue.use(VueGoogleMaps, {

// load: {

// key: 'AIzaSyBydORIMnpNVpr5gnG_984ytWHe63XjcbY',


// }

// });

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
