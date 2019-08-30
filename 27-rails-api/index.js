function createHeader(){
  document.body.insertAdjacentHTML("afterbegin", `
    <h1>Welcome to the DOM</h1>
    <h2>Featured Bored Games</h2>
  `)
}
createHeader()


fetch("http://localhost:3000/api/v1/games")
.then(res => res.json())
.then(data => {
  data.forEach(function (el, I, arr){
    const str = `
      <div class="tile">
        <h4>${el.name} <button data-action="delete" data-board-game-id=${el.id}>X</button></h4>
        <p>${el.description}</p>
        <div class="image-wrapper">
          <img src="${el.image_url}" alt="${el.name}">
        </div>
        <p>Likes: <span data-board-game-id=${el.id}>${el.likes}</span></p>
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

    fetch(`http://localhost:3000/api/v1/games/${e.target.dataset.boardGameId}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((data) => {
      alert(data.message)
      e.target.parentElement.parentElement.remove()
    })

    
  }
})






const newGameForm = document.querySelector("#new-game")

newGameForm.addEventListener("submit", function(e){
  e.preventDefault()

  const name = e.target.name.value
  const description = e.target.description.value
  const image_url = e.target.image_url.value

  const formData = {
    name: name,
    description: description,
    image_url: image_url
  }

  fetch("http://localhost:3000/api/v1/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)

    if (data.errors){
      alert(data.errors)
    } else {
      const str = `
        <div class="tile">
          <h4>${data.name} <button data-action="delete" data-board-game-id=${data.id}>X</button></h4>
          <p>${data.description}</p>
          <div class="image-wrapper">
            <img src="${data.image_url}" alt="${data.name}">
          </div>
          <p>Likes: <span data-board-game-id=${data.id}>${data.likes}</span></p>
          <button data-board-game-id=${data.id} data-action="like" class="like button">Like</button>
          <button class="love button">Love</button>
        </div>`

      container.insertAdjacentHTML("beforeend", str)

    }
    
  })

})
