import type { CartItem } from "../../../types/product";

let rawCarrito = localStorage.getItem("carrito");

let listaCarrito: CartItem[] = [];

if(rawCarrito != null){
    listaCarrito = JSON.parse(rawCarrito);
}

function vaciarCarrito(){
    let vaciarButton = document.getElementById("btn-vaciar-carrito");
    let seccionTotal = document.getElementById("total-section");

    vaciarButton?.addEventListener("click", ()=>{
        localStorage.removeItem("carrito");
        cargarCarrito([]);
        if(seccionTotal != null){
        seccionTotal.textContent = "";
    }
    })
}

vaciarCarrito();


function cargarCarrito(contenidoCarrito: CartItem[]){

    let sectionCarrito = document.getElementById("carrito-container");

    if(sectionCarrito != null){
        sectionCarrito.innerHTML = "";
    }  

    if(contenidoCarrito.length == 0){
        const textTotal = document.createElement("p");
        textTotal.textContent = "Carrito Vacío";

        sectionCarrito?.appendChild(textTotal);

    } else{
        contenidoCarrito.forEach(element => {

        const cardContainer = document.createElement("div");

            const nombre = document.createElement("h2");
            const imagen = document.createElement("img");
            const precio = document.createElement("p");
            const cantidad = document.createElement("p");

            nombre.textContent = `${element.nombre}`;
            imagen.src = `${element.imagen}`;
            precio.textContent = `$ ${element.precio}`;
            cantidad.textContent = `Cantidad: ${element.cantidad}`;

            cardContainer.appendChild(nombre);
            cardContainer.appendChild(imagen);
            cardContainer.appendChild(precio);
            cardContainer.appendChild(cantidad);

        sectionCarrito?.appendChild(cardContainer);

        })
    }      

    
}

cargarCarrito(listaCarrito);




function calcularTotal(listaPrecioTotal: CartItem[]){
    let seccionTotal = document.getElementById("total-section");
    let precioTotal = 0;

    listaPrecioTotal.forEach(element => {
        let subtotal = element.precio * element.cantidad;

        precioTotal += subtotal;
    })

    if(seccionTotal != null){
        seccionTotal.textContent = `Total: $${precioTotal}`;
    }
    
}

calcularTotal(listaCarrito);