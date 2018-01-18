import {updateData} from '../map.js'

let db = firebase.database()
let places = firebase.database().ref('places')

export const bindDB = () => {
  places.on('value', snapshot => {
    const val = snapshot.val()
    Object.keys(val).map(e => val[e]).map(e => {
      updateData({
        'type': 'Feature',
        'properties': {
          id: e._id,
          name: e.name,
          description: e.description
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [
            e.localisation.lng,
            e.localisation.lat
          ]
        }
      })
    })
  })
}

export const addNewPin = (description, localisation, pictureEncoded, name) => {
  const newPlacesRef = places.push()
  const newPlaceId = firebase.database().ref().child('places').push().key
  console.log(newPlaceId)
  newPlacesRef.set({
    _id: newPlaceId,
    description,
    localisation,
    pictureEncoded,
    name
  })
}
