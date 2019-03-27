class Cat {
    constructor (name) {
        this.name = name
    }

    speak() {
        // same as console.log(this.name + " makes a noise")
        console.log(`${this.name} makes a noise.`)
    }
}

class Lion extends Cat {
    speak () { // overriding the speak method defined in the parent class
        super.speak()
        console.log(`${this.name} roars.`)

    }
}

class littleLion extends Lion {

}