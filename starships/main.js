import { starships } from '../data/starships.js'

const nav = document.querySelector('nav')

const navList = document.querySelector('.navList')


function populateNav(starships) {
   
    starships.forEach(starship => {
        //need to extract number from person.url property
        //let charNum = getCharNumber(person.url)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"
    anchorWrap.addEventListener("click", () => {
    })

    let listItem = document.createElement ('li')
    listItem.textContent = starship.name

    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)

})
}

populateNav(starships)