class Thief {
  constructor(name, alias, gadgets){
    // instance variables from ruby

    // keys on object
    this.name = name
    this.alias = alias
    this.gadgets = gadgets
    this.inventory = []
  }

  // instance method
  steal(artifact){
    console.log(`${this.name} made off with the ${artifact}. The ${this.alias} strikes again!`)
    this.inventory.push(artifact)
  }

  // class method (static methods)
  static classy(){
    console.log("So classy")
  }
}

let talon = new Thief("Alexandra Ferrante", "Talon", ["Paragliding cape", "Grappling hook"])
let snakeBite = new Thief("Morgan Kesler", "Snake Bite", ["Bola", "Sleeping darts"])