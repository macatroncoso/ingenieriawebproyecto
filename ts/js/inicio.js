"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let galeria = Array();
galeria = [
    {
        "id": 1,
        "description": "descripcion de la foto",
        "imagen": "foto1.jpg",
        "link": "consejos.html"
    },
    {
        "id": 2,
        "description": "descripcion de la foto",
        "imagen": "foto2.jpg",
        "link": "cuenta.html"
    },
    {
        "id": 3,
        "description": "descripcion de la foto",
        "imagen": "foto3.jpg",
        "link": "sobre nosotros.html"
    },
    {
        "id": 4,
        "description": "descripcion de la foto",
        "imagen": "foto4.jpg",
        "link": "noticias.html"
    },
    {
        "id": 5,
        "description": "descripcion de la foto",
        "imagen": "nowater.jpeg",
        "link": "situacion actual.html"
    }
];
function construirGaleria() {
    let i;
    let fotitos = document.querySelector("#fotos");
    for (i = 0; i < galeria.length; i++) {
        //creamos la imagen
        let img = document.createElement("img");
        img.src = `images/${galeria[i].imagen}`;
        img.alt = galeria[i].description;
        img.classList.add("w-100");
        img.height = 600;
        //creamos el link
        let a = document.createElement("a");
        a.href = "./" + galeria[i].link;
        a.classList.add("carousel-item");
        if (i == 0) {
            a.classList.add("active");
        }
        a.appendChild(img);
        fotitos.appendChild(a);
        //fotitos.appendChild(a).innerHTML = "Hola";
    }
}
;
window.addEventListener("load", construirGaleria);
console.log(galeria);
