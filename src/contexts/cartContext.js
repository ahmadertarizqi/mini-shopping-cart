import React from 'react';

const initialState = {
   cart: []
};

function reducer(state, action) {
   switch(action.type) {
      case "ADD_ITEM": {
         const findItem = state.cart.findIndex(val => val.id === action.payload.id); // if item already in cart
         if(findItem !== -1) {
            let cartTemp = [...state.cart];
            cartTemp[findItem] = {
               ...cartTemp[findItem],
               quantity: cartTemp[findItem].quantity + 1 // increase item quantity
            };
            return {
               ...state,
               cart: cartTemp
            }
         }
         
         return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }]
         }
      }

      case "DECREASE_ITEM": {
         const findItem = state.cart.findIndex(val => val.id === action.payload);
         let cartTemp = [...state.cart];
         if(cartTemp[findItem].quantity > 1) {
            cartTemp[findItem] = {
               ...cartTemp[findItem],
               quantity: cartTemp[findItem].quantity - 1 // decrease item quantity
            };
         }
         return {
            ...state,
            cart: cartTemp
         }
      }

      case "REMOVE_ITEM": {
         return {
            ...state,
            cart: state.cart.filter(val => val.id !== action.payload)
         }
      }

      default: {
         return state;
      }
   }
};

// context
const CartContext = React.createContext(null);

export function CartProvider({ children }) {
   const [cartState, dispatch] = React.useReducer(reducer, initialState);
   return (
      <CartContext.Provider value={{ cartState, dispatch }}>
         {children}
      </CartContext.Provider>
   )
};

export const useCartConsumer = () => React.useContext(CartContext);