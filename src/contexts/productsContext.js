import React from 'react';
import datas from "../services/products.json";
// import * as types from "./constants";

const initialState = {
   categories: [
      { id: 0, name: "all" },
      { id: 1, name: "shirt" },
      { id: 2, name: "jacket" },
      { id: 3, name: "shoes" },
   ],
   products: datas.products,
   productsFiltered: [],
};

function reducer(state, action) {
   switch (action.type) {
      case 'FILTER_BY_CATEGORY':
         return {
            ...state,
            productsFiltered: state.products.filter(product => product.category === action.payload.name)
         };
      default:
         return state;
   }
};

// context
const ProductsContext = React.createContext(null);

// context-provider
function ProductsProvider({ children }) {
   const [state, dispatcher] = React.useReducer(reducer, initialState);
   return (
      <ProductsContext.Provider value={{ state, dispatcher }}>
         {children}
      </ProductsContext.Provider>
   )
};

// context-consumer
function useProductsConsumer() {
   const context = React.useContext(ProductsContext);
   if(context === undefined) {
      throw new Error("useProductsConsumer must be used within a ProductsProvider");
   };
   return context;
};

export { ProductsProvider, useProductsConsumer };