class Person {
    constructor (newFirstName){
        this.firstName = newFirstName
    }

    walk(){
        return "I am walking"
    }

    sayHello(){
        return `Hellllo ! I'm ${this.firstName}`
    }
}

class Student extends Person {
    constructor (newFirstName, subject = 'nothing'){
        super(newFirstName)
        this.subject = subject
    }

    sayHello(){
    //    return super.sayHello()
    return `${super.sayHello()}. I am studying ${this.subject}`
    }

    sayGoodBye(){
        return "BYEEEEEEEEEEEEEE "
    }
}