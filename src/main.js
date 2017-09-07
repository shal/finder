import Vue from 'vue'
import VueResource from 'vue-resource'

import Autocomplete from './components/Autocomplete.vue'

Vue.use(VueResource)

var vm = new Vue({
  el: "#app",
  components: {
    autocomplete: Autocomplete
  }
})
