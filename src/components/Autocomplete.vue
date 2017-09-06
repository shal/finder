<template>

  <div>
    <input type="text" v-model="input" v-on:keyup="fetchData">
    <ul>
      <li class="place"v-for="place in places">{{ place.description }}</li>
    </ul>
  </div>

</template>

<script>
let url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json"
let key = "AIzaSyBymZIk7_vshx1lrP5CLeGw7qP7vYZ-5Z8"

export default {
  data() {
    return {
      places: "",
      input: ""
    }
  },
  methods: {
    fetchData: function () {
      var vm = this;
      this.$http.get(url, { params: { input: vm.input, key: key } })
        .then(response => this.places = response.body.predictions)
    }
  }
}
</script>

<style lang="scss">
 .place {
    color: green;
}
</style>
