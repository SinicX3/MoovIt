import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function Map () {
  useEffect(() => {
    // Vérifie si une instance existe déjà
    const container = L.DomUtil.get('map')
    if (container != null) {
      container._leaflet_id = null
    }

    const map = L.map('map').setView([48.8566, 2.3522], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Hello Paris !')     // Coordonnées de test
    L.marker([42.8566, 2.3422]).addTo(map).bindPopup('Hello Paris !')
  }, [])

  return <div id="map" />
}

export default Map