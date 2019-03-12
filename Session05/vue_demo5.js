var app = new Vue({
    el: '#app-5',
    data : {
        message: 'Hello Vue.js'
    },
    // giving click event
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})