// Create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;
// Create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name = lat]').value = lat;
    document.querySelector('[name = lng]').value = lng;

    // remover marker da layer
    marker && map.removeLayer(marker)
    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//adicionando foto 

function addPhotoField(){
   //pegar o container de #images
    const container = document.querySelector('#images')
   //pegar o container de .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
   //realizar clone da ultima imagem
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
   // Verificar se o campo está fazio, se sim, adicionar, se não, parar
   const input = newFieldContainer.children[0]
   if(input.value == ""){
       return
   }
   //Limpar o campo antes de adicionar
   input.value=""
   //adicionar clone da ultima imagem ao container de #images
   container.appendChild(newFieldContainer)
}

//deletar imagens do container 

function deleteField(event) {

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value=""
        return
    }

    span.parentNode.remove();

}

// selecionar sim ou não

function toggleSelect(event){
    const button = event.currentTarget

    // Remover classe active dos botões

    document.querySelectorAll('.button-select button').forEach((button)=>{
        button.classList.remove("active")
    })

    //adicionando classe active
    button.classList.add("active")

    //Atualizar do meu input Hidden com o valor selecionados
    const input = document.querySelector('[name = "open_on_weekends" ]')

    //verificar se SIM ou se NÃO
    input.value = button.dataset.value
}

function validate(event){

    const selectedLatAndLng = document.querySelector('#mapid')
    const input = selectedLatAndLng.children[0]

    if (input.value == "" ){
        event.preventDefault()
        alert("Selecione um ponto no mapa!")
    }
}