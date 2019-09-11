document.addEventListener('DOMContentLoaded', () => {
  let pokemons = []

  // DOM Elements
  const pokeContainer = document.getElementById('pokemon-container')
  const pokeSearch = document.getElementById('pokemon-search-input')

  pokeSearch.addEventListener('input', e => {
    const filteredPokes = pokemons.filter(pokemon => pokemon.name.includes(e.target.value))

    pokeContainer.innerHTML = ""
    filteredPokes.forEach(pokemon => {
      pokeContainer.insertAdjacentHTML("beforeend", `
        <div class="pokemon-card">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div class="pokemon-image">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.flipped ? pokemon.sprites.back : pokemon.sprites.front}">
            </div>
          </div>
        </div>`)
    })
  })

  pokeContainer.addEventListener("click", event => {
    if (event.target.dataset.action === "flip") {
      // i know about the pokemon in the array
      // debugger
      const foundPokemon = pokemons.find(pokemon => pokemon.id === parseInt(event.target.dataset.id))
      // foundPokemon.flipped = !foundPokemon.flipped
      if (foundPokemon.flipped === true) {
        foundPokemon.flipped = false
      } else {
        foundPokemon.flipped = true
      }

      // event.target.src = foundPokemon.flipped ? foundPokemon.sprites.back : foundPokemon.sprites.front
      if (foundPokemon.flipped) {
        event.target.src = foundPokemon.sprites.back
      } else {
        event.target.src = foundPokemon.sprites.front
      }

      // optimistic rendering:
      // we are rendering the flipped image regardless of whether the fetch works or not
      fetch(`http://localhost:3000/pokemons/${event.target.dataset.id}`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "flipped": foundPokemon.flipped
        })
      })

    }
  })

  // initial fetch
  fetch("http://localhost:3000/pokemons")
    .then(r => r.json())
    .then(pokeArray => {
      // store the pokemon in a variable higher in scope
      // so we can access them in other functions
      pokemons = pokeArray

      pokemons.forEach(pokemon => {
        pokeContainer.insertAdjacentHTML("beforeend", `
          <div class="pokemon-card">
            <div class="pokemon-frame">
              <h1 class="center-text">${pokemon.name}</h1>
              <div class="pokemon-image">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.flipped ? pokemon.sprites.back : pokemon.sprites.front}">
              </div>
            </div>
          </div>`)
      })
    })


})
