import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'
import { species } from '../data/species.js'
import { planets } from '../data/planets.js'


const greetingDiv = document.querySelector(".greeting")
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === "female")
console.log(femaleCharacters)

const otherCharacters = people.filter(person => {
    if (person.gender === "hermaphrodite" || person.gender === "n/a") {
        return person
    }
})

let counter = 1


people.forEach(person => {


    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

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
    greetingDiv.appendChild(anchorWrap)
    counter++

})

maleButton.addEventListener("click", (event) => {
    console.log("clicked on maleButton")
})

