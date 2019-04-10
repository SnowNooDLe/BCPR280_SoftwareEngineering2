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

// defining global component
// Vue.component(name and implementation)
Vue.component('table-component', {
    props: ['items'],
    template: `<table border = "1px">
                <tr>
                    <th>Index</th>
                    <th>Number</th>
                </tr>
                <table-item
                    v-for="(item, index) in items"
                    v-bind:value="item.number"
                    v-bind:index="index"
                    v-bind:key="item.id">
                </table-item>
                </table>`
})

Vue.component('table-item', {
    props:['index', 'value'],
    template: `<tr>
                <td>{{ index + 1 }}</td>
                <td>{{ value }}</td>
                </tr>`
})

var squareCalculationApp = new Vue({
    // el, count this as an attribute
    el: '#squareApp',
    data: {
        start: 1,
        end: 0,
        allMyNumbers: []
    },
    methods: {
        calculateSquare: function (){
            console.log("IM here")
            var squareValue
            for (i = 1; i <= this.end; i++){
                console.log("Am i in here ?")
                this.allMyNumbers.push({id: i, number: i * i})
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