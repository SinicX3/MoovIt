import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import customIconUrl from '/car-side-solid.svg'

function Map () {
  useEffect(() => {
    const container = L.DomUtil.get('map')     // Vérifie si une instance existe déjà
    if (container != null) {
      container._leaflet_id = null
    }

    const customIcon = L.icon({
      iconUrl: customIconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })

    const map = L.map('map').setView([48.8566, 2.3522], 6, {dragging: true})
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    L.marker([48.1159049,-1.7708476],{icon: customIcon}).addTo(map).bindPopup('Un véhicule disponible à Rennes')
    L.marker([45.7579211,4.7527238],{icon: customIcon}).addTo(map).bindPopup('Un second véhicule à Lyon')
    L.marker([44.8518896,0.4058839],{icon: customIcon}).addTo(map).bindPopup('Un troisième véhicule à Bergerac')
    L.marker([48.7240136,3.6831645],{icon: customIcon}).addTo(map).bindPopup('Un troisième véhicule à Sézanne')

    return () => {
      map.remove();
    }

  }, [])

  return <div id="map" />
}

export default Map