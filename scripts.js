document.addEventListener("DOMContentLoaded", () => {
const URL = 'https://api.thecatapi.com/v1/images/search';
const traegatobut = document.getElementById("traegato");

function cargarGatitoIncreible() {
fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;

        
    })
}
cargarGatitoIncreible();
traegatobut.addEventListener("click", cargarGatitoIncreible);
});