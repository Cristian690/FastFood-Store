

import { getCategories, PRODUCTS } from "../../../data/data";
import type { CartItem, Product } from "../../../types/product";
import type { ICategoria } from "../../../types/categoria";


let productosActuales: Product[] = PRODUCTS;
// function cargarProductos(listaProductos: Product[]) {    

//     let sectionProductos = document.getElementById("card-productos-container");
//     console.log(sectionProductos);
//     if (!sectionProductos) return;

//     sectionProductos.innerHTML = "";

//     listaProductos.forEach(element =>{

//         const cardProducto = document.createElement("div");

//             const cardImage = document.createElement("img"); 
//             const cardH2 = document.createElement("h2");
//             const cardPrecio = document.createElement("p");
//             const cardBtnAgregar = document.createElement("button");

//             cardImage.src = `${element.imagen}`;
//             cardImage.alt = `Imagen ${element.nombre}`;

//             cardH2.textContent = `${element.nombre}`;

//             cardPrecio.textContent = `$${ element.precio}`;

//             cardBtnAgregar.textContent = "Agregar al Carrito";
//             cardBtnAgregar.addEventListener("click", ()=> {

//                 let rawCarrito = localStorage.getItem("carrito");
//                 let carrito: CartItem[] = [];
                
//                 if (rawCarrito != null){
//                     carrito = JSON.parse(rawCarrito);                    
//                 }    

//                 let productoExiste = false;
                
//                 carrito.forEach(elementCarrito => {
//                     if(element.id == elementCarrito.id){
//                         elementCarrito.cantidad += 1;
//                         productoExiste = true;
//                     }
//                 });
                
//                 if(!productoExiste){
//                     const nuevoProducto: CartItem = {
//                         id: element.id,
//                         nombre: element.nombre,
//                         precio: element.precio,
//                         categoriaId: element.categoriaId,
//                         imagen: element.imagen,
//                         cantidad: 1
//                     }

//                     carrito.push(nuevoProducto)
//                 }

//                 localStorage.setItem("carrito", JSON.stringify(carrito));

//             })
            
//             cardProducto.appendChild(cardImage);
//             cardProducto.appendChild(cardH2);
//             cardProducto.appendChild(cardPrecio);
//             cardProducto.appendChild(cardBtnAgregar);

//             sectionProductos.appendChild(cardProducto);        
//     });   
          
// }

function cargarProductos(listaProductos: Product[]) {    

    let sectionProductos = document.getElementById("card-productos-container");

    if (!sectionProductos) return;

    sectionProductos.innerHTML = "";

    // Traemos carrito actual
    let rawCarrito = localStorage.getItem("carrito");
    let carrito: CartItem[] = [];

    if(rawCarrito != null){
        carrito = JSON.parse(rawCarrito);
    }

    listaProductos.forEach(element =>{

        const cardProducto = document.createElement("div");

        const cardImage = document.createElement("img"); 
        const cardH2 = document.createElement("h2");
        const cardPrecio = document.createElement("p");
        const cardBtnAgregar = document.createElement("button");

        cardImage.src = `${element.imagen}`;
        cardImage.alt = `Imagen ${element.nombre}`;

        cardH2.textContent = `${element.nombre}`;

        cardPrecio.textContent = `$${element.precio}`;

        // Buscamos si el producto ya existe en carrito
        let cantidadProducto = 0;

        carrito.forEach(elementCarrito => {
            if(element.id == elementCarrito.id){
                cantidadProducto = elementCarrito.cantidad;
            }
        });

        // Texto dinámico del botón
        if(cantidadProducto > 0){
            cardBtnAgregar.textContent = `Agregar (${cantidadProducto})`;
        } else{
            cardBtnAgregar.textContent = "Agregar al Carrito";
        }

        cardBtnAgregar.addEventListener("click", ()=> {

            let rawCarrito = localStorage.getItem("carrito");
            let carrito: CartItem[] = [];
            
            if (rawCarrito != null){
                carrito = JSON.parse(rawCarrito);                    
            }    

            let productoExiste = false;
            
            carrito.forEach(elementCarrito => {

                if(element.id == elementCarrito.id){

                    elementCarrito.cantidad += 1;
                    productoExiste = true;

                }
            });
            
            if(!productoExiste){

                const nuevoProducto: CartItem = {
                    id: element.id,
                    nombre: element.nombre,
                    precio: element.precio,
                    categoriaId: element.categoriaId,
                    imagen: element.imagen,
                    cantidad: 1
                }

                carrito.push(nuevoProducto)
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Refrescamos catálogo
            cargarProductos(productosActuales);

        })
        
        cardProducto.appendChild(cardImage);
        cardProducto.appendChild(cardH2);
        cardProducto.appendChild(cardPrecio);
        cardProducto.appendChild(cardBtnAgregar);

        sectionProductos.appendChild(cardProducto);        
    });   
          
}

cargarProductos(productosActuales);

function buscarProductos(){

    let inputBuscador = document.getElementById("input-buscar") as HTMLInputElement;

    if(inputBuscador.value == ""){

        productosActuales = PRODUCTS;

        cargarProductos(productosActuales);

    } else{

        let listaEncontrados: Product[] = []

        PRODUCTS.forEach(element => {

            if(element.nombre.toLowerCase().includes(inputBuscador.value.toLowerCase())){

                listaEncontrados.push(element)

            }

        });

        productosActuales = listaEncontrados;

        cargarProductos(productosActuales)

    }
}

let leerInput = document.getElementById("input-buscar");

if (leerInput != null){
    leerInput.addEventListener("input", buscarProductos);
}

function cargarCategoria(listaCategoria: ICategoria[]){

    let sectionCategorias = document.getElementById("section-buttons-cat");

    if (!sectionCategorias) return;

    sectionCategorias.innerHTML = "";


    // Creación Boton "Mostrar Todos"
    
    const buttonMostrarTodos = document.createElement("button");

    buttonMostrarTodos.textContent = "Mostrar Todos"

    
    buttonMostrarTodos.addEventListener("click", ()=> {

        productosActuales = PRODUCTS;

        cargarProductos(productosActuales);

    });   

    sectionCategorias.appendChild(buttonMostrarTodos);  
    
    //-------------------------------------

    
    listaCategoria.forEach(element => {
        const button = document.createElement("button");
        button.textContent = element.nombre;

        button.addEventListener("click", ()=> {
            filtrarPorCategoria(element.id)
        });

        sectionCategorias.appendChild(button);
        
    })
    
};

cargarCategoria(getCategories());


function filtrarPorCategoria(idCategoria: number | string){

    let listaCategoriaFiltrada: Product[] = [];

    PRODUCTS.forEach(element => {
        if(element.categoriaId === idCategoria){
            listaCategoriaFiltrada.push(element);
        }
    });

    productosActuales = listaCategoriaFiltrada;

    cargarProductos(listaCategoriaFiltrada);
}

function resetearCarritoHome(){

    const botonReset = document.getElementById("btn-reset-home");

    botonReset?.addEventListener("click", ()=>{

        localStorage.removeItem("carrito");

        cargarProductos(productosActuales);

    });
}

resetearCarritoHome();