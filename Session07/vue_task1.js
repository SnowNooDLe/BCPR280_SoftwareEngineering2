var countLettersApp = new Vue({
    // el, count this as an attribute
    el: '#task-1',
    data: {
        count: 0,
        insertedCharacter: ""
    },
    methods: {
        checkingNoOfLetters: function (){
            var inputValue = document.getElementById('inputArea').value
            if (inputValue != "."){
                if (inputValue != ""){
                    this.insertedCharacter += inputValue
                    document.getElementById('inputArea').value = ""
                    this.count++
                } else{
                    alert("plz put value")
                }
            } else{
                document.getElementById('buttonToBeDisabled').disabled = true
                alert('Program finished')
            }
        },
        resetProgram: function (){
            document.getElementById('buttonToBeDisabled').disabled = false
            this.count = 0
            this.insertedCharacter = ""
            document.getElementById('inputArea').value = ""
        }
    }
})