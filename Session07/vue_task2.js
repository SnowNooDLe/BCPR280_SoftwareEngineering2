var squareCalculationApp = new Vue({
    // el, count this as an attribute
    el: '#task-2',
    data: {
        start: 1,
        end: 5,
        allMyNumbers: []
        // allMyNumbers: [1,2,3,4,5]
    },
    methods: {
        calculateSquare: function (){
            console.log("IM here")
            var squareValue
            for (i = 0; i < this.end; i++){
                console.log("Am i in here ?")
                squareValue = (i+1) * (i+1)
                console.log(squareValue)
                this.allMyNumbers.push({id: i+1, squaredNum: squareValue})
            }
        }
    }
})