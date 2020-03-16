import { starships } from '../data/starships.js'
import { removeChildren } from '../utils.js'
import {getLastNumber} from '../utils.js'

const nav = document.querySelector('nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle('is-active');

})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle('is-active');

})


function populateNav(starships) {
   
    starships.forEach(starship => {
        //need to extract number from person.url property
        //let charNum = getCharNumber(person.url)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"
    anchorWrap.addEventListener("click", event => {
        let shipName = event.target.textContent
        console.log(shipName)
        const foundShip = starships.find(ship => ship.name === shipName)
        populateShipView(foundShip)
    })

    let listItem = document.createElement ('li')
    listItem.textContent = starship.name

    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)

})
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', event => {
        shipImage.hidden = true
        dialog.classList.toggle('is-active')
    })
    shipView.appendChild(shipImage)

}

populateNav(starships)