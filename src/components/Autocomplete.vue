<template>

  <span>
    <input list="items" type="text" v-model="input" :id="id" :class="inputClass"
           :placeholder="placeholder" autocomplete="off" @keyup="fetchData">

    <datalist id="items">
      <option v-for="item in items" :value="item"></option>
    </datalist>
  </span>

</template>

<script>
let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json'
let key = 'AIzaSyBymZIk7_vshx1lrP5CLeGw7qP7vYZ-5Z8'

export default {
  data() {
    return {
      items: [],
    }
  },
  props: {
    id: String,
    inputClass: String,
    placeholder: String,
    msg: String,
  },
  computed: {
    input: {
      get: function() {
        return this.msg
      },
      set: function (newValue) {
        this.$emit('update:msg', newValue)
      }
    }
  },
  methods: {
    fetchData: function () {
      let vm = this
      this.$http
      .get(url, { params: { input: vm.input, types: '(cities)', key: key } })
      .then(response => this.items = response.body.predictions
        .map((x) => x.description))
    }
  }
}
</script>
