import map from './map'
import {addNewPin} from './database/server.js'

const $ = (e) => document.getElementById('addPin').querySelectorAll(e)

let currentCoords, title, description

document.getElementById('mainCircleButton')
.addEventListener('click', () => {
  document.body.className = 'logged showAddPin'
  currentCoords = map.getCenter()
})

$('input[type=button]')[0].addEventListener('click', () => {
  document.body.className = 'logged'
})

$('input[type=submit]')[0].addEventListener('click', () => {
  title = $('input[type=text]')[0].value
  description = $('textarea')[0].value
  if (title !== '' && description !== '') {
    addNewPin(description, currentCoords, null, title)
    document.body.className = 'logged'
  }
})
