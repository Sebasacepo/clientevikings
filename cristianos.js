let url="http://localhost/apiSura/public/novikingos";

let peticion={
    method:"GET"
}

fetch(url, peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){   
    console.log(datos);

    let cristianos=datos;
    pintar(cristianos);
})

function pintar(cristianos){
    let contenedorPadre = document.getElementById("contenedorPadre");

    cristianos.map(function(cristiano){
        
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let img=document.createElement("img");
        img.classList.add("card-img-top");
        img.src=cristiano.foto;

        let titulo=document.createElement("h3");
        titulo.classList.add("text-center");
        titulo.textContent=cristiano.nombre;

        let descripcion=document.createElement("h5");
        descripcion.classList.add("text-center");
        descripcion.textContent=cristiano.descripcion;

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);


        columna.appendChild(tarjeta);

        contenedorPadre.appendChild(columna);

    })
}