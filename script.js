import pokemons from "./pokemons.js";

let kartochki = document.querySelector('.pokemons')
let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let selectSort = document.querySelector('.selectSort')

function generator(massiv){
  kartochki.textContent = '' 
  massiv.forEach(element => {
    let card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
      <img src="${element.img}" alt="">
      <h1>${element.name}</h1>

      <div class="blue">${element.type}</div>
      <div class="red">#${element.id}</div>

      <p>Candy count: ${element.candy_count}</p>
      <p>${element.weight}</p>
      <p class="weak">${element.weaknesses}</p>

      <div class="time">${element.spawn_time}</div>
    `
    kartochki.append(card)
  })
}

generator(pokemons)

input.addEventListener('input', () => {
    const inputsearchValue = input.value.toLowerCase().trim()
    const filterpokemons = pokemons.filter(element =>
        element.name.toLowerCase().trim().includes(inputsearchValue)
    )
    generator(filterpokemons)
})
btn.addEventListener('click', () => {
    if (selectSort.value === "a-z") {
        pokemons.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
                generator(pokemons)

    } else if (selectSort.value === "z-a") {
        pokemons.sort((a, b) => {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
        })
        generator(pokemons)
    } 
    
})