import { CartItemProps } from "../types";

export const itemsInCart = (cart: CartItemProps[]): number => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  }

 export const calculateItemTotalPrice = (price: number, quantity : number | undefined): number => {
    return quantity ? quantity * price : price
  }

export function priceToLocaleString(price: number) {
    return price.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    })
  }

export const calculateTotalPrice = (cart: CartItemProps[]): string => {
    // Inicializar el precio total en 0
    let totalPrice = 0;
     // Iterar sobre cada elemento del carrito
    cart.forEach((item) => {
      // Verificar si la cantidad está definida y mayor que 0
      if (item.quantity && item.quantity > 0) {
        // Sumar al precio total el precio del producto multiplicado por la cantidad
        totalPrice += item.product.price * item.quantity;
      }
    });
    
    // Devolver el precio total calculado
    return priceToLocaleString(totalPrice);
  };

  export const calculateTotalShippingCost = (cart: CartItemProps[]): string => {
    // Inicializar el precio total en 0
    let totalPrice = 0;
     // Iterar sobre cada elemento del carrito
    cart.forEach((item) => {
      // Verificar si la cantidad está definida y mayor que 0
      if (item.quantity && item.quantity > 0) {
        // Sumar al precio total el precio del producto multiplicado por la cantidad
        totalPrice +=  item.quantity * 0.85;
      }
    });
    
    // Devolver el precio total calculado
    return priceToLocaleString(totalPrice);
  };
  