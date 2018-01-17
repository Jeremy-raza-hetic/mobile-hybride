import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibXJ3cyIsImEiOiJjamNoaG52cTQxcjV2MnhybmR0b291NzAwIn0.llM1G3MnRKpw0rG3s6wH3w'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [2.34, 48.854],
  maxBounds: [[2.214, 48.75], [2.489, 48.954]],
  zoom: 11
})

const data = {
  'id': 'symbols',
  'type': 'symbol',
  'source': {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': []
    }
  },
  'layout': {
    'icon-image': 'triangle-stroked-15'
  }
}

map.on('load', () => {
  map.addLayer(data)

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
  map.on('click', 'symbols', function (e) {
    // map.flyTo({center: e.features[0].geometry.coordinates})
    console.log(e.features[0].properties)
  })

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
  map.on('mouseenter', 'symbols', function () {
    map.getCanvas().style.cursor = 'pointer'
  })

    // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'symbols', function () {
    map.getCanvas().style.cursor = ''
  })
})

export const updateData = (dataOject) => {
  data.source.data.features.push(dataOject)
}

[
  {
    'type': 'Feature',
    'properties': {
      id: 1
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [
        -91.395263671875,
        -0.9145729757782163
      ]
    }
  },
  {
    'type': 'Feature',
    'properties': {
      id: 2
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [
        -90.32958984375,
        -0.6344474832838974
      ]
    }
  },
  {
    'type': 'Feature',
    'properties': {
      id: 3
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [
        -91.34033203125,
        0.01647949196029245
      ]
    }
  }
].map((e) => e)
