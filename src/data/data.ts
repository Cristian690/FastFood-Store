import type { Product } from "../types/product";
import type { ICategoria } from "../types/categoria";

export const getCategories = (): ICategoria[] => {
    return [
        {id: 1, nombre: "Pizzas"},
        {id: 2, nombre: "Hamburguesas"},
        {id: 3, nombre: "Bebidas"},
        {id: 4, nombre: "Postres"},        
    ];
}

export const PRODUCTS: Product[] = [
    {id: 1, nombre: "Pizza Muzzarella", precio: 15000, categoriaId: 1, imagen: "/images/products/PizzaMuzzarella.jpg"},
    {id: 2, nombre: "Pizza Napolitana", precio: 22000, categoriaId: 1, imagen: "/images/products/PizzaNapolitana.jpg"},
    {id: 3, nombre: "Pizza Jamón y Morrones", precio: 25000, categoriaId: 1, imagen: "/images/products/PizzaJamonyMorrones.jpg"},
    {id: 4, nombre: "Hamburguesa Simple", precio: 8500, categoriaId: 2, imagen: "/images/products/HamburguesaSimple.jpg"},
    {id: 5, nombre: "Hamburguesa Completa", precio: 12000, categoriaId: 2, imagen: "/images/products/HamburguesaCompleta.jpg"},
    {id: 6, nombre: "Hamburguesa Doble Carne", precio: 16000, categoriaId: 2, imagen: "/images/products/HamburguesaDobleCarne.jpg"},
    {id: 7, nombre: "Cerveza 250 ml", precio: 3500, categoriaId: 3, imagen: "/images/products/BebidaCerveza.jpg"},
    {id: 8, nombre: "Coca Cola 250 ml", precio: 3800, categoriaId: 3, imagen: "/images/products/BebidaCoca.jpg"},
    {id: 9, nombre: "Pepsi 250 ml", precio: 3600, categoriaId: 3, imagen: "/images/products/BebidaPepsi.jpg"},
    {id: 10, nombre: "Postre Helado", precio: 4000, categoriaId: 4, imagen: "/images/products/PostreHelado.jpg"},
    {id: 11, nombre: "Postre Nestle", precio: 4800, categoriaId: 4, imagen: "/images/products/PostreNestle.jpg"},
    {id: 12, nombre: "Torta Postre", precio: 3800, categoriaId: 4, imagen: "/images/products/PostreTorta.jpg"}
]