<template>
  <div>

    <div class="row">
      <autocomplete :msg.sync="input"
                    input-class="form-control"
                    placeholder="Find city"
                    class="col-sm-11">
      </autocomplete>

      <button class="btn btn-success" type="button" @click="showResult">
        Find
      </button>
    </div>

    <br>

    <div class="jumbotron" v-if="isPressed">
        <a :href="getWiki()">
           <h1 class="display-3">{{ input }}</h1>
        </a>
    </div>

  </div>
</template>

<script>
import Autocomplete from './Autocomplete.vue'

export default {
  components: {
    'autocomplete': Autocomplete
  },
  data() {
    return {
      input: '',
      isPressed: false
    }
  },
  methods: {
    getWiki: function () {
      let indexOfComa = this.input.indexOf(',')
      let x = this.input.substr(0, indexOfComa)
      return 'https://en.wikipedia.org/wiki/' + x;
    },
    showResult: function () {
      this.isPressed = true
    }
  }
}
</script>
