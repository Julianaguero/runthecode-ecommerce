import { createContext } from "react";
import { useCartReducer } from "../hooks";
import { type CartContextProps, type CartContextProviderProps } from "../types";


export const CartContext = createContext<CartContextProps>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},

});

export default function CartProvider({ children }: CartContextProviderProps) {
  const { state, addItemToCart, removeItemFromCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItemToCart,
        removeItemFromCart,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}
