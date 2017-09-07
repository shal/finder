import Vue from 'vue'
import VueResource from 'vue-resource'

import Autocomplete from './components/Autocomplete.vue'

Vue.use(VueResource)

Vue.create = function (options) {
  return new Vue(options)
}

Vue.create({
  components: {
    autocomplete: Autocomplete
  },
  el: '#app'
})
