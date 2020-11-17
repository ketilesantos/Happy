// Create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}){
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth:240,
        minheight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </img> </a>`)
    
    // Create and add marker
    L.marker([lat,lng], {icon}).addTo(map)
    .bindPopup(popup)
}

const orphanageSpan = document.querySelectorAll('.orphanages span')
orphanageSpan.forEach((span) => {

    const orphanage= {
       id: span.dataset.id,
       name: span.dataset.name,
       lat: span.dataset.lat,
       lng: span.dataset.lng

    }
    addMarker(orphanage)
})

