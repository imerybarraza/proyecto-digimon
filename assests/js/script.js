const URL = "https://digimon-api.vercel.app/api/digimon"
const container = document.getElementById("container")
const nameModal = document.getElementById("name-modal")
const levelModal = document.getElementById("level-modal")
const myModal = document.getElementById('myModal')
const imageModal = document.getElementById('image-modal')
const btnUp = document.querySelector(".btn-up")
const fetchData = () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })
}

fetchData()

let datos = ""
const showData = (data) => {
    datos = data
    data.map((item, i) => {
        var { name, img, level } = item
        const article = document.createElement('article')
        article.classList.add('card')
        article.innerHTML = `
       <img src=${img} class="card-img-top" alt=${name}>
            <div class="card-body">
              <h5 class="card-title" id="title">Nombre : ${name}</h5>
              <p>Level : ${level}</p>
             <button data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-success" onclick={openModal(${i})}>Ver detalle</button>
            </div>`
        container.appendChild(article)
    })
}

const openModal = (id) => {
    let digimon = datos[id]
    const { name, img, level } = digimon
    nameModal.innerHTML = name
    levelModal.innerHTML = level
    imageModal.innerHTML = `
    <img src=${img} alt=${name}/>`
    
}

btnUp.onclick=()=>{
    document.body.scrollIntoView({
        behavior: "smooth",
      });
}