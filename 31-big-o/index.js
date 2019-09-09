function find(array, target){
  for(let i = 0; i<array.length; i++){
    console.log("Running!!")
    if (array[i] === target){
      return array[i]
    }
  }
}

// O(n^2)
function quadraticTime(arr){
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
      console.log("Running!!")
    }
  }
}


// O(n^3)
function cubicTime(arr){
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
      for(let z = 0; z<arr.length; z++){
        console.log("Running!!")
      }
    }
  }
}

// O(n!)


function countDoubles(arr){
  let count = 0

  for(let i = 0; i<arr.length; i++){
    // look at arr[i]
    // use arr.includes to check if in the array
    // if yes, add to count

    // problem is that .includes itself runs in O(n) time
  }
}

// O(1)
let obj = {hello: "goodbye", beef: "steak"}

//O(1)
obj.beef











