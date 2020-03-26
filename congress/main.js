import {senators} from '../data/senators.js'
import {representatives} from '../data/representatives.js'

const senatorDiv = document.createElement('div')
const main = document.querySelector('main')

function populateSenatorDiv() {
    senators.forEach(senator => {
        console.log(`${senator.first_name} ${senator.last_name}`)
    })
}

populateSenatorDiv()