document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3354 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  // PIECES OF DA DOM
  const myImageTag = document.querySelector("#image")
  const myName = document.querySelector("#name")
  const myLikes = document.querySelector("#likes")
  const myComments = document.querySelector("#comments")


  fetch(imageURL, { method: "GET" })
    .then(response => response.json())
    .then(imageObject => {
      console.log(imageObject)
      myImageTag.src = imageObject.url
      myName.innerText = imageObject.name
      myLikes.innerText = imageObject.like_count

      imageObject.comments.forEach(comment => {
        // myComments.innerHTML += `<li>${comment.content}</li>`
        myComments.insertAdjacentHTML("beforeend", `<li>${comment.content}</li>`)
      })
    })

  document.querySelector("#like_button").addEventListener("click", () => {
    // update that frontend
    const currentLikes = parseInt(myLikes.innerHTML)
    const newLikes = currentLikes + 1
    myLikes.innerHTML = newLikes

    // update that backend
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      body: JSON.stringify({
        image_id: imageId
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  })

  document.querySelector("#comment_form").addEventListener("submit", e => {
    e.preventDefault()
    const newComment = e.target.comment.value
    // myComments.innerHTML += `<li>${newComment}</li>`
    // myComments.insertAdjacentHTML("beforeend", `<li>${newComment}</li>`)
    e.target.reset()

    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      body: JSON.stringify({
        image_id: imageId,
        content: newComment
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(comment => {
        myComments.insertAdjacentHTML("beforeend", `<li>${comment.content}</li>`)
      })
  })
})
