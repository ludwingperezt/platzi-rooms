import Vue from 'vue';
// firebase SIEMPRE DEBE CARGARSE ANTES DE App.vue!!
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHnh8f9C2yLaAYdMVOo1r1GZvSbn-1SQs',
  authDomain: 'p-rooms.firebaseapp.com',
  databaseURL: 'https://p-rooms.firebaseio.com',
  projectId: 'p-rooms',
  storageBucket: '',
  messagingSenderId: '380158800038',
  appId: '1:380158800038:web:d02203b21a83624f7f0467',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
