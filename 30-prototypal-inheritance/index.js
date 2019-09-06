document.addEventListener("DOMContentLoaded", function(){
  // let talon = new Thief("Alexandra Ferrante", "Talon", ["Paragliding cape", "Grappling hook"])
  // let snakeBite = new Thief("Morgan Kesler", "Snake Bite", ["Bola", "Sleeping darts"])
  const API = new APICommunicator()

  API.getThieves()
  .then(data => {
    data.forEach(thief => {
      new Thief(thief.id, thief.name, thief.alias, thief.gadgets)
    })
  })

  const container = document.querySelector("#thief-container")
  container.addEventListener("click", (e) => {
    const buttonClicked = e.target
    if(buttonClicked.dataset.action === "delete"){
     // grab the right thief object
     const found = Thief.all.find(thief => {
        return thief.id === parseInt(buttonClicked.dataset.id)
     })

     API.deleteThieves(found.id)
     .then(() => {
       found.delete()
     })

    }
  })
})

