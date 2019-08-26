function sayHello(){
  console.log("above myVar2 declaration")
  let myVar2 = "Local scope"


  console.log(`Hello! from ${name}`)
}


console.log("myVar", myVar)
let myVar = "Global variable"

sayHello()