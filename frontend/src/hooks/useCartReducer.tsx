import { useReducer } from "react";
import { cartInitialState, cartReducer } from "../Reducers/CartReducer";
import { type CartItemProps } from "../types";

export default function useCartReducer() {
    const [state, dispatch ] = useReducer(cartReducer, cartInitialState);

  const addItemToCart = ({product, quantity}: CartItemProps) => {dispatch({
    type: "ADD_TO_CART",
    payload: {product, quantity}
  })}

  const removeItemFromCart = ({product }: CartItemProps) => {dispatch({
    type: "REMOVE_FROM_CART",
    payload: {product }
  })}

 

  return { state, addItemToCart, removeItemFromCart}
}
