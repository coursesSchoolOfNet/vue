import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import Dash from './Dash';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  template: '<Dash/>',
  components: { Dash },
})