import {bindDB} from './database/server.js'
import {bindCard} from './card'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmJ6IiwiYSI6ImNqY2l2aGJ1ZTFyb3gzNHBhcXg0b2kxMzgifQ.xE9EAnPpVLK3F3WxEhj1hg'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/juanbz/cjcj8r2nv8t892sp2pbdt4rsg',
  center: [2.34, 48.854],
  maxBounds: [[2.214, 48.75], [2.489, 48.954]],
  zoom: 11
})

const layer = {
  'id': 'symbols',
  'type': 'symbol',
  'source': 'geojson',
  'layout': {
    'icon-image': 'circle-15'
  }
}
const data = {
  "type": "FeatureCollection",
  "features": []
}

map.on('load', () => {
  map.addSource('geojson', {
    "type": "geojson",
    data
  })
  map.addLayer(layer)

  map.on('click', 'symbols', function (e) {
    console.log(e.features[0].properties)
    bindCard(e.features[0].properties.name, e.features[0].properties.description)
  })

  map.on('mouseenter', 'symbols', function () {
    map.getCanvas().style.cursor = 'pointer'
  })

  map.on('mouseleave', 'symbols', function () {
    map.getCanvas().style.cursor = ''
  })

  bindDB()
})



export const updateData = (dataOject) => {
  data.features.push(dataOject)
  map.getSource('geojson').setData(data)
}

export default map
