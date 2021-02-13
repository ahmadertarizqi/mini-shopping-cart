import React from 'react';
import Header from "./components/Header";
import Overlay from './components/Overlay';
import ProductCard from "./components/ProductCard";
import CartPanel from './components/CartPanel';
import CartItem from "./components/CartItem";
import useEscapeKeyPress from './hooks/useEscapeKeyPress';

import datas from "./services/products.json";
const { products } = datas;

function App() {
   const [openCart, setOpenCart] = React.useState(false);
   const [cart, setCart] = React.useState([]);

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

   const addToCartHandler = (item) => {
      const findItemInCart = cart.find(val => val.id === item.id);
      if(!findItemInCart) {
         setCart(prevState => [...prevState, { ...item, quantity: 1 }]);
      };
   };

   const increaseItemHandler = (itemID) => {
      let cartItems = [...cart];
      const indexItem = cartItems.findIndex(item => item.id === itemID);
      cartItems[indexItem].quantity++;
      setCart(cartItems);
   };

   const decreaseItemHandler = (itemID) => {
      let cartItems = [...cart];
      const indexItem = cartItems.findIndex(item => item.id === itemID);
      if(cartItems[indexItem].quantity > 1) {
         cartItems[indexItem].quantity--;
         setCart(cartItems);
      }
   };

   React.useEffect(() => {
      console.log(cart);
   }, [cart]);

   return (
      <div className="max-w-lg my-0 mx-auto">
         <Header 
            cartPanel={toggleCartPanel} 
            itemCount={cart.length}
         />
         <main className="container mx-auto px-0 pb-6 pt-14">
            <div className="py-5">
               <div className="flex flex-wrap mb-4 -mx-2">
                  {products.map((product) => (
                     <div key={product.id} className={`w-1/2 px-2`}>
                        <ProductCard
                           product={product}
                           addToCart={addToCartHandler}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </main>
         <CartPanel isOpen={openCart} closeCartPanel={toggleCartPanel}>
            {cart.length > 0 ?
               cart.map((item) => (
                  <CartItem key={item.id}
                     cartItem={item}
                     increaseItem={increaseItemHandler}
                     decreaseItem={decreaseItemHandler}
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
