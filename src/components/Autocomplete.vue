<template>

  <span>
    <input type="text" v-model="input" :id="id" :class="inputClass" :placeholder="placeholder"
           autocomplete="off"
           @click="inFocus = true"
           @keyup="keyPressed">

          <span v-if="inFocus" class="item" v-for="item in items" @click="input = item"
                :class="[input == item ? 'selected' : '', 'description', itemClass]">
            {{ item }}
          </span>


  </span>

</template>

<script>
let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json'
let key = 'AIzaSyBymZIk7_vshx1lrP5CLeGw7qP7vYZ-5Z8'

export default {
  data() {
    return {
      items: [],
      input: '',
      inFocus: false
    }
  },
  props: {
    id: String,
    inputClass: String,
    listClass: String,
    itemClass: String,
    placeholder: String
  },
  methods: {
    fetchData: function () {
      let vm = this
      this.$http.get(url, { params: { input: vm.input, types: '(cities)',   key: key } })
        .then(response => this.items = response.body.predictions.map((x) => x.description))
    },
    keyPressed: function (e) {
      switch(e.code) {
        case 'ArrowUp': this.moveUp(); break;
        case 'ArrowDown': this.moveDown(); break;
        case 'Enter': this.end(); break;
        default: this.fetchData()
      }
    },
    moveDown: function () {
      let index = this.items.indexOf(this.input) + 1
      this.input = this.items[index % this.items.length]
    },
    moveUp: function () {
      let index = this.items.indexOf(this.input) - 1
      this.input = (index >= 0 ? this.items[index] : this.items[this.items.length - 1])
    },
    end: function () {
      this.inFocus = false
      }
  }
}
</script>

<style lang="scss">
  .selected {
    background-color: lightblue;
  }

  .item {
    display: block;
    padding: 5px;

    &:nth-of-type(1) {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

    &:nth-last-of-type(1) {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
</style>
