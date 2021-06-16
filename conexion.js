//RESETA PARA CONECTARNOS CON UN API(SERVIDOR)

let url="http://localhost/apiSura/public/heroes";

let peticion={
    method:"GET"
}

fetch(url, peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){
    console.log(datos);
    console.log(datos[0].nombre);
    console.log(datos[0].foto);

    let vikings=datos;
    pintar(vikings);
    

})
function pintar(vikings){
    let contenedorPadre = document.getElementById("contenedorPadre");
    

    vikings.map(function(viking){

     
        
        //contenedor
        let columna=document.createElement("div");
        columna.classList.add("col");
        //h-100

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");       

        let foto=document.createElement("img");
        foto.classList.add("card-img-top"); //clase de bootstrap card-img-top
        foto.src=viking.foto;

        let titulo=document.createElement("h3");
        titulo.classList.add("text-center");
        titulo.textContent=viking.nombre;

        let descripcion=document.createElement("h5");
        descripcion.classList.add("text-center");
        descripcion.textContent=viking.descripcion;

        tarjeta.appendChild(foto);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        

        columna.appendChild(tarjeta);

        contenedorPadre.appendChild(columna);



    });
}


