import React from 'react';
import Header from "./components/Header";
import Overlay from './components/Overlay';
import ProductCard from "./components/ProductCard";
import CartPanel from './components/CartPanel';
import CartItem from "./components/CartItem";
import useEscapeKeyPress from './hooks/useEscapeKeyPress';

import datas from "./services/products.json";
import { calcItemsQuantity, calcTotalPrice } from './utils';
import { useCartConsumer } from './contexts/cartContext';
const { products } = datas;

function App() {
   const [openCart, setOpenCart] = React.useState(false);
   const { cartState, dispatch } = useCartConsumer();

   const toggleCartPanel = () => {
      setOpenCart(!openCart);
      if (!openCart) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'initial';
      }
   };

   // close cartPanel with Esc keyboard
   useEscapeKeyPress(openCart, toggleCartPanel);

   React.useEffect(() => {
      console.log(cartState.cart, 'log state');
   }, [cartState.cart]);

   
   // using useReducer
   const addToCartAction = (item) => {
      dispatch({ 
         type: "ADD_ITEM",
         payload: item
      });
   };

   const increaseItemAction = (item) => {
      dispatch({
         type: "ADD_ITEM",
         payload: item
      });
   };

   const decreaseItemAction = (itemID) => {
      const findItemInCart = cartState.cart.find(val => val.id === itemID);
      if(findItemInCart.quantity > 1) {
         dispatch({
            type: "DECREASE_ITEM",
            payload: itemID
         });         
      } else {
         dispatch({
            type: "REMOVE_ITEM",
            payload: itemID
         });
      }
   };

   return (
      <div className="max-w-lg my-0 mx-auto">
         <Header
            cartPanel={toggleCartPanel}
            itemCount={calcItemsQuantity(cartState.cart)}
         />
         <main className="container mx-auto px-0 pb-6 pt-14">
            <div className="py-5">
               <div className="flex flex-wrap mb-4 -mx-2">
                  {products.map((product) => (
                     <div key={product.id} className={`w-1/2 px-2`}>
                        <ProductCard
                           product={product}
                           addToCart={addToCartAction}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </main>
         <CartPanel
            isOpen={openCart}
            closeCartPanel={toggleCartPanel}
            totalPrice={calcTotalPrice(cartState.cart)}
            titlePanel={"Shopping Cart List"}
         >
            {cartState.cart.length > 0 ?
               cartState.cart.map((item) => (
                  <CartItem key={item.id}
                     cartItem={item}
                     increaseItem={increaseItemAction}
                     decreaseItem={decreaseItemAction}
                  />
               ))
               :
               <div className="h-full flex items-center justify-center">
                  <p className="font-semibold">Cart is Empty</p>
               </div>
            }
         </CartPanel>
         {openCart ? <Overlay remove={toggleCartPanel} /> : null}
      </div>
   );
}

export default App;
