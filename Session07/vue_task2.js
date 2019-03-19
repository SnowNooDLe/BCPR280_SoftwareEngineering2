var squareCalculationApp = new Vue({
    // el, count this as an attribute
    el: '#task-2',
    data: {
        start: 1,
        end: 5,
        allMyNumbers: []
    },
    methods: {
        calculateNewList: function (){
            // console.log("IM here")
            for (i = this.start; i <= this.end; i++){
                this.allMyNumbers.push(i)
                // console.log("Am i in here ?")
            }

        },
        calculateButton: function (){
            console.log("IM here")
            var squareValue
            for (i = 0; i < this.allMyNumbers.length; i++){
                console.log("Am i in here ?")
                squareValue = this.allMyNumbers[i] * this.allMyNumbers[i]
                console.log(squareValue)
                this.allMyNumbers.push[i] = squareValue
            }
        }
    }
})