
export interface Product {
    id: number;
    nombre: string;
    precio: number;
    categoriaId: number;
    imagen: string;
}

export interface CartItem extends Product {
    cantidad: number
}