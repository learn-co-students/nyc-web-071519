// can store functions in variables
const number = 10

const funky = function(){
  console.log("So funky")
}



// can store functions as keys on objects
const obj = {
  beef: "steak"
}

const funkyObj = {
  beef: "ground",
  sayHello: function(){
    console.log("funkyObj is saying Hello!")
  }
}

// can pass functions as arguments to OTHER functions
function addOne(num){
  return num + 1
}

const value = 7

addOne(value)


// higher order function does one or both of the following:
// takes a function as an argument
// returns a function

// taking functions as arguments
function higherOrderFunction(callback){
  console.log("I'M IN OUTER FUNCTION")
  callback
}

function sayHello(){
  console.log("Hello!!!!!")
}

function sayGoodbye(){
  console.log("Goodbye 😞")
}


function finalBalance(amount, calculateTax){
  const final = amount + calculateTax(amount)
  console.log(`You owe $${final}`)
}

function applyNYSalesTax(dollarAmount){
  return dollarAmount*0.09
}

function applyNJSalesTax(dollarAmount){
  return dollarAmount*0.0675
}

// returning functions from functions
function outerFunction(){
  console.log("OUTER FUNCTION")


  return function(){
    console.log("INNER FUNCTION")
  }
}


function taxCalculator(tax){
  return function(amount){
      const final = amount + amount*tax
      console.log(`You owe $${final}`)
  }
}

function generateCounter(){
  let counter = 0

  return function(){
    counter++
    console.log(counter)
  }

}









