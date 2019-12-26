import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  items = []; //para almacenar la lista (matriz) de los productos actuales en el carrito.

  constructor() { }
//metodos para agregar, devolver y borrar articulos del carrito
  addToCart(product) {
    this.items.push(product);
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}