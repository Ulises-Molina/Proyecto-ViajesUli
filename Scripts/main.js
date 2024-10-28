const contenedorRoma = document.querySelectorAll(".gallery__item");

const botonRoma =document.getElementById("roma");
const botonMadrid =document.getElementById("madrid");


function desaparecerRoma() {
    for ( i = 0 ; i < 8 ; i++) {
    const fotos = contenedorRoma[i];
    fotos.style.display = "none"
} 
}

function aparecerRoma() {
    for ( i = 0 ; i < 8 ; i++) {
    const fotos = contenedorRoma[i];
    fotos.style.display = "block";
    fotos.style.animation = "aparecer-fotos 1s both";
} 
}

function aparecerMadrid() {
    for ( i = 8 ; i < 16 ; i++) {
    const fotos = contenedorRoma[i];
    fotos.style.display = "block";
    fotos.style.animation = "aparecer-fotos 1s both";
} 
}

function desaparecerMadrid() {
    for ( i = 8 ; i < 16 ; i++) {
    const fotos = contenedorRoma[i];
    fotos.style.display = "none"
} 
}

botonMadrid.addEventListener("click",() => {
    desaparecerRoma();
    aparecerMadrid();
});

botonRoma.addEventListener("click",() => {
    desaparecerMadrid();
    aparecerRoma();
});


//MODAL GALLERY //
const imagenes = document.querySelectorAll(".img");
const modal = document.querySelector (".modal__gallery");
const modalClose = document.getElementById("modal__close");
const modalImg = document.querySelector(".modal__img");

imagenes.forEach((imagen) => {
    imagen.addEventListener ("click", ()=> {
        modal.style.display = "block";
        modalImg.src= imagen.src;
    });
});

modalClose.addEventListener("click", (e)=> {
    modal.style.display = "none";
})




















