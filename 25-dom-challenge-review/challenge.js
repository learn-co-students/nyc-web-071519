document.addEventListener("DOMContentLoaded", function(e){
  const counter = document.querySelector("#counter")
  const commentForm = document.querySelector("#comment-form")

  let interval = setInterval(incrementCounter,1000)

  document.body.addEventListener("click", function(e){
    if (e.target.id === "-"){
      let currentNumber = parseInt(counter.innerText)
      currentNumber--
      counter.innerText = currentNumber
    } else if (e.target.id === "+"){
      incrementCounter()
    } else if (e.target.id === "pause"){

      if(e.target.innerText === "pause"){
        // stop the timer
        clearInterval(interval)

        // change the text
        e.target.innerText = "resume"

        // disable all buttons
        const allButtons = document.querySelectorAll("button")
        allButtons.forEach(function(button){
          if(button.id !== "pause"){
            button.disabled = true
          }
        })
      } else if(e.target.innerText === "resume"){
        // reset interval
        interval = setInterval(incrementCounter,1000)

        // change the text
        e.target.innerText = "pause"

        // re-enable all buttons
        const allButtons = document.querySelectorAll("button")
        allButtons.forEach(function(button){
          button.disabled = false
        })
      }
      
    } else if (e.target.id === "<3"){
      const likesList = document.querySelector("ul")

      const foundLi = document.querySelector(`li[data-num="${counter.innerText}"]`)

      if (foundLi){
        // increment number of likes
        const span = foundLi.querySelector(".like-count")

        let numLikes = parseInt(span.innerText)
        numLikes++

        span.innerText = numLikes + " times"
      } else {
        // this number has never been liked before
         likesList.insertAdjacentHTML("beforeend", `
          <li data-num=${counter.innerText}>
            <span class="number">${counter.innerText}</span>
            has been liked <span class="like-count">1 time</span>
          </li>
        `)
      }   
    }
  })


  commentForm.addEventListener("submit", function(e){
    e.preventDefault()
    const content = e.target.beef.value
    const commentList = document.querySelector("#list")


    commentList.insertAdjacentHTML("beforeend", `<li>${content}</li>`)
  })




  // setInterval takes 2 arguments, a callback (something to do) and an integer representing time in milliseconds




  function incrementCounter(){
    let currentNumber = parseInt(counter.textContent)
    currentNumber++
    counter.textContent = currentNumber
  }

})


