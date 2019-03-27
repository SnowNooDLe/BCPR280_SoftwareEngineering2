class Cat {
  constructor (name) {
    this.name = name
  }

  speak () {
    // console.log(this.name + ' makes a noise.')
    console.log(`${this.name} makes a noise.`)
  }
}

class Lion extends Cat {
  speak () { // overriding parent speak function
    super.speak()
    // console.log(this.name + ' roars.')
    console.log(`${this.name} roars.`)
  }
}

let cat = new Cat('F2')
console.log(cat.name)
cat.speak()

let lion = new Lion('F1')
console.log(lion.name)
lion.speak()
