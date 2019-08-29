// function sleep(time){
//   const start = new Date()
//   while (new Date() - start < time){}
//   console.log("DONE")
// }

// function createHeader(){
//   document.body.insertAdjacentHTML("afterbegin", `
//     <h1>Welcome to the DOM</h1>
//     <h2>Featured Bored Games</h2>
//   `)
// }
// // setTimeout(function(){ console.log("DONE")}, 5000)
// // sleep(5000) // fetching data (BLOCKING)

// createHeader()

fetch("http://localhost:3000/games")
.then(res => res.json())
.then(data => {
  data.forEach(function (el, I, arr){
    const str = `
      <div class="tile">
        <h4>${el.name} <button data-action="delete" data-board-game-id=${el.id}>X</button></h4>
        <p>${el.description}</p>
        <div class="image-wrapper">
          <img src="${el.img_url}" alt="${el.name}">
        </div>
        <p>Likes: <span data-board-game-id=${el.id}>0</span></p>
        <button data-board-game-id=${el.id} data-action="like" class="like button">Like</button>
        <button class="love button">Love</button>
      </div>`

    container.insertAdjacentHTML("beforeend", str)
  });

})




const container = document.querySelector("#container")

container.addEventListener("click", function(e){
  if (e.target.dataset.action === "like"){
    let spans = document.querySelectorAll(`span`)
    NodeList.prototype.find = Array.prototype.find


    let span = spans.find(span => span.dataset.boardGameId === e.target.dataset.boardGameId)

    let prevCount = parseInt(span.textContent)
    prevCount++
    span.textContent = prevCount
  } else if (e.target.dataset.action === "delete"){

    fetch(`http://localhost:3000/games/${e.target.dataset.boardGameId}`, {
      method: "DELETE"
    })
    .then(() => {e.target.parentElement.parentElement.remove()})

    
  }
})






const newGameForm = document.querySelector("#new-game")

newGameForm.addEventListener("submit", function(e){
  e.preventDefault()

  //grab all the user input
  const name = e.target.name.value
  const description = e.target.description.value
  const img_url = e.target.img_url.value

  // tie in neat little bow (object)
  const formData = {
    name: name,
    description: description,
    img_url: img_url
  }


  // send off the request
  fetch("http://localhost:3000/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    const str = `
      <div class="tile">
        <h4>${data.name} <button data-action="delete" data-board-game-id=${data.id}>X</button></h4>
        <p>${data.description}</p>
        <div class="image-wrapper">
          <img src="${data.img_url}" alt="${data.name}">
        </div>
        <p>Likes: <span data-board-game-id=${data.id}>0</span></p>
        <button data-board-game-id=${data.id} data-action="like" class="like button">Like</button>
        <button class="love button">Love</button>
      </div>`

    container.insertAdjacentHTML("beforeend", str)
  })

})


// console.log("BEFORE FETCH")

// fetch("https://pokeapi.co/api/v2/pokemon/2")
// .then(response => response.json())
// .then(pokemon => {
//   renderPokemon(pokemon)
  
// })


// console.log("AFTER FETCH")

// function renderPokemon(pokemonObj){
//   document.body.insertAdjacentHTML("beforeend", `
//     <h1>${pokemonObj.name}</h1>
//   `)
// }