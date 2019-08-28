// const tile = document.querySelector(".tile")

// tile.addEventListener("click", function(e){
//   if (e.target.className === "like button"){
//     let span = document.querySelector("span")
//     let prevCount = parseInt(span.textContent)
//     prevCount++
//     span.textContent = prevCount
//   } else if (e.target.className === "love button"){
//     let span = document.querySelector("span")
//     let prevCount = parseInt(span.textContent)
//     prevCount += 5
//     span.textContent = prevCount
//   } else if (e.target.textContent === "X"){
//     e.target.parentElement.parentElement.remove()
//   }

// })


const data = [
  {
    id: 1,
    name: "Settlers of Catan",
    description: "Friendships will be tested.",
    img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
  },
  {
    id: 2,
    name: "Monopoly",
    description: "Friendships will end.",
    img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
  },
  {
    id: 3,
    name: "Azul",
    description: "Great fun with the friends!.",
    img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
  }
]

const container = document.querySelector("#container")

data.forEach(function (el, I, arr){
  const str = `
    <div class="tile">
      <h4>${el.name} <button>X</button></h4>
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

container.addEventListener("click", function(e){
  if (e.target.dataset.action === "like"){
    console.log("ONE OF THE LIKE BUTTONS WAS CLICKED")
    console.log("IT WAS BUTTON WITH ID", e.target.dataset.boardGameId)


    let spans = document.querySelectorAll(`span`)
    NodeList.prototype.find = Array.prototype.find


    let span = spans.find(span => span.dataset.boardGameId === e.target.dataset.boardGameId)

    let prevCount = parseInt(span.textContent)
    prevCount++
    span.textContent = prevCount
  }
})





