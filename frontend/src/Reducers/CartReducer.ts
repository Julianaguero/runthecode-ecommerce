import { MAX_QUANTITY } from "../utils/constants";
import { type CartActionProps, type CartStateProps} from "../types";

// Función para obtener el carrito del localStorage
const getInitialCartFromLocalStorage = (): CartStateProps[] => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
        return JSON.parse(cartFromStorage);
    } else {
        return [];
    }
}

// Función para actualizar el localStorage con el estado del carrito
const updateLocalStorage = (state: CartStateProps[]) => {
    localStorage.setItem("cart", JSON.stringify(state));
}

export const cartInitialState: CartStateProps[] = getInitialCartFromLocalStorage();

export const cartReducer = (state: CartStateProps[] , action: CartActionProps): typeof state => {
    const { type: actionType, payload: actionPayload } = action;

    switch (actionType){
        case 'ADD_TO_CART': {
            const { product, quantity } = actionPayload; 

            const productInCartIndex = state.findIndex(
                (state) => state.product._id === product._id
              );
              
              if (productInCartIndex >= 0) {
                const newState = structuredClone(state);
                // if there is "quantity" from Cart.tsx set "quantity" else add +1  
                if(newState[productInCartIndex].quantity! <= MAX_QUANTITY && quantity) {
                  newState[productInCartIndex].quantity = quantity
                } else if (newState[productInCartIndex].quantity! < MAX_QUANTITY) { // non null assertion is used, to avoid Object is possibly 'undefined' warning
                  newState[productInCartIndex].quantity! += 1;
                } else {
                  throw new Error("Maximum quantity per product reached");
                }
                updateLocalStorage(newState)
                return newState;
              }
          
              // Si el producto no está en el carrito, añadirlo con cantidad 1
              const newState = [
                  ...state,
                  {
                    product,
                    quantity: 1,
                  },
              ]
              updateLocalStorage(newState)
              return newState
        }

        case "REMOVE_FROM_CART": {
            const { product  } = actionPayload; //
            const newState = state.filter(item => item.product._id !== product._id)
            updateLocalStorage(newState)
            return newState
        }
    }
    return state
}