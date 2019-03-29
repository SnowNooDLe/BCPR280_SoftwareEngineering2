// Model
class Game {
    
    count = 0
    generatedNum = Math.floor(Math.random() * 100)
    constructor () {
    }

    generateNumberByGame(){
        return this.generatedNum
    }
    
    compareNumbers(userInput, randomNum){
        if (userInput > 99 || userInput < 0){
            return "Number is between 0 and 99"
        }
        this.count++
        if (userInput < randomNum){
            return "Try Higher"
        } else if (userInput > randomNum){
            return "Try Lower"
        } else if (userInput == randomNum){
            return `You got it in ${this.count} trials!`
        }  else{
            return "Something is not right !"
        }
    }

    getCountValue(){
        return this.count
    }

}


// CONTROLLER
// Q1 seems okay
var Q1 = new Vue({
    el:'#appendixTwoOne',
    data: {
        game: new Game(),
        randomNum: 0,
        count: 0,
        txtInput: '',
        result: ''
    },
    methods: {
        compareNumbers: function () {
            this.randomNum = this.game.generateNumberByGame()
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            this.result = this.game.compareNumbers(this.txtInput, this.randomNum)
            this.count = this.game.getCountValue()
        }
    }
});

// CONTROLLER
// working on Q2
var Q2 = new Vue({
    el:'#appendixTwoTwo',
    data: {
        game: new Game(),
        randomNum: 0,
        count: 0,
        txtInput: '',
        result: ''
    },
    methods: {
        compareNumbers: function () {
            this.randomNum = this.game.generateNumberByGame()
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            this.result = this.game.compareNumbers(this.txtInput, this.randomNum)
            this.count = this.game.getCountValue()
        }
    }
});




