import Vue from 'vue'
import VueResource from 'vue-resource'

import Autocomplete from './components/Autocomplete.vue'
import View from './components/View.vue'

Vue.use(VueResource)

Vue.create = function (options) {
  return new Vue(options)
}

Vue.create({
  components: {
    autocomplete: Autocomplete,
    mainView: View
  },
  el: '#app'
})
