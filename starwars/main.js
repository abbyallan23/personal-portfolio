import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'
import { species } from '../data/species.js'
import { planets } from '../data/planets.js'


const gallery = document.querySelector(".gallery")
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters.length)

const femaleCharacters = people.filter(person => person.gender === "female")
console.log(femaleCharacters.length)

const otherCharacters = people.filter(person => {
    if (person.gender === "hermaphrodite" || person.gender === "n/a" || person.gender === "none" ){
        return person
    }
})
console.log(otherCharacters.length)

maleButton.addEventListener("click", (event) => {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener("click", (event) => {
    populateDOM(femaleCharacters)
})

otherButton.addEventListener("click", (event) => {
    populateDOM(otherCharacters)
})

function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)

}

//getCharNumber("https://swapi.co/api/people/1/")


function populateDOM(maleCharacters) {
    maleCharacters.forEach(person => {
        //need to extract number from person.url property
let charNum = getCharNumber(person.url)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    imageItem.addEventListener('error', (event) => {
        //console.log(`${event.type}; Loading image\m')
        //console.log(event)
        //imageItem.hidden = true
        //imageItem.src = ''
    })

    //add some way to handle user clicks on the image
    imageItem.addEventListener("click", () => {
    })

    anchorWrap.appendChild(imageItem)
    gallery.appendChild(anchorWrap)
    //counter++

})

}
