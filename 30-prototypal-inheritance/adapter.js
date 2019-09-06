class APICommunicator{

  constructor(){
    this.url = "http://localhost:3000"
  }

  getThieves(){
    return fetch(this.url + "/thieves")
    .then(res => res.json())
  }

  deleteThieves(id){
    return fetch(this.url + `/thieves/${id}`, {
        method: "DELETE"
     })
  }

}