
// CONTROLLER
var Q1 = new Vue({
    el:'#appendixTwoOne',
    data: {
        randomNum: Math.floor(Math.random() * 100),
        count: 0,
        txtInput: '',
        result: ''
    },
    methods: {
        compareNumbers: function () {
            this.count++
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            if (this.txtInput < this.randomNum){
                this.result = "Try Higher"
            } else if (this.txtInput > this.randomNum){
                this.result = "Try Lower"
            } else if (this.txtInput == this.randomNum){
                this.result = `You got it in ${this.count} trials`
            }
        }
    }
});



// CONTROLLER
var Q2 = new Vue({
    el:'#appendixTwoTwo',
    data: {
        randomNum: Math.floor(Math.random() * 100),
        count: 0,
        txtInput: '',
        result: ''
    },
    methods: {
        compareNumbers: function () {
            this.count++
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            if (this.txtInput < this.randomNum){
                this.result = "Try Higher"
            } else if (this.txtInput > this.randomNum){
                this.result = "Try Lower"
            } else if (this.txtInput == this.randomNum){
                this.result = `You got it in ${this.count} trials`
            }
        }
    }
});
