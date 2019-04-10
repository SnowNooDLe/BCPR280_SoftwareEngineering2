let ListItem = {
  props: ['value'],
  template: `<li>{{ value }}</li>`
}

let ListComponent = {
  props: ['items'],
  components: {
    'list-item': ListItem
  },
  template: `<ol>
              <list-item 
                v-for="(item, index) in items"
                :value="item.number"
                :index="index"
                :key="item.id">
              </list-item>
             </ol>`
}

let app = new Vue({
  el: '#squareApp',
  data: {
    start: 1,
    end: 5,
    allMyNumbers: []
  },
  methods: {
    calculateSquare: function () {
      console.log('CALLED')
      console.log(this.allMyNumbers)
      for (let i = this.start; i <= this.end; ++i) {
        this.allMyNumbers.push({id: i, number: i ** 2}) 
      }
    },
    displayNumbers: function () {
      this.allMyNumbers = []
      this.calculateSquare()
    }
  },
  components: {
    'list-component': ListComponent
  }
})













