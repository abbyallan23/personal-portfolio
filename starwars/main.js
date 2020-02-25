import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'
import { species } from '../data/species.js'
import { planets } from '../data/planets.js'


const greetingDiv = document.querySelector(".greeting")

const castList = document.createElement("ul")

let counter = 1


people.forEach(person => {
    const listItem1 = document.createElement("li") 
    listItem1.textContent = person.name
    castList.appendChild(listItem1)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "a"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    //add some way to handle user clicks on the image
    imageItem.addEventListener("click", () => {
    })

    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++

})

greetingDiv.appendChild(castList)

