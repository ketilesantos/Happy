const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//pegando os dados do html

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([lat, lng], { icon }).addTo(map);

/* Selecionando as images */
function selectImage(event) {
  //selecionando o button
  const button = event.currentTarget;
  console.log(button);

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  //Selecionando image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //Atualizando o container img

  imageContainer.src = image.src;

  //Adicionando a classe .active
  button.classList.add("active");
}
