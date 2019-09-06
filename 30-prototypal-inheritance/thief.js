class Thief {
  constructor(id, name, alias, gadgets){
    this.id = id
    this.name = name
    this.alias = alias
    this.gadgets = gadgets
    this.inventory = []

    Thief.all.push(this)

    this.render()
  }

  steal(artifact){
    console.log(`${this.name} made off with the ${artifact}. The ${this.alias} strikes again!`)
    this.inventory.push(artifact)
  }

  render(){
    const container = document.querySelector("#thief-container")
    const element = document.createElement("div")
    element.innerHTML = `
      <h1>${this.name}</h1>
      <h3>${this.alias}</h3>
      <button data-id=${this.id} data-action="delete">Delete</button>
    `
    container.append(element)

    this.element = element
  }

  updateName(name){
    this.name = name

    this.element.querySelector("h1").textContent = name
  }

  delete(){
    this.element.remove()
  }
  
}

Thief.all = []
