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
      console.log("added item success");
      setCart(prevState => [...prevState, item]);
   };

   React.useEffect(() => {
      console.log(cart);
   }, [cart]);

   return (
      <div className="max-w-lg my-0 mx-auto">
         <Header cartPanel={toggleCartPanel} />
         <main className="container mx-auto px-0 pb-6 pt-14">
            <div className="py-5">
               <div className="flex flex-wrap mb-4 -mx-2">
                  {products.map((product, idx) => (
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
               [100, 200, 3223, 4000, 5000].map((idx) => (
                  <CartItem key={idx}
                     price={idx}
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
