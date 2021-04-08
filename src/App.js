import React from 'react';
import Header from "./components/common/Header";
import Overlay from './components/common/Overlay';
import ProductList from "./components/ProductList";
import CartPanel from './components/CartPanel';

import useEscapeKeyPress from './hooks/useEscapeKeyPress';
import { useCartConsumer } from './contexts/cartContext';

function App() {
   const [openCart, setOpenCart] = React.useState(false);
   const { cartState } = useCartConsumer();

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

   return (
      <div className="max-w-lg my-0 mx-auto">
         <Header cartPanel={toggleCartPanel} />
         <main className="container mx-auto px-0 pb-6 pt-14">
            <div className="py-5">
               <ProductList />
            </div>
         </main>
         <CartPanel
            isOpen={openCart}
            closeCartPanel={toggleCartPanel}
            titlePanel={"Shopping Cart List"}
         />
         {openCart ? <Overlay onClick={() => toggleCartPanel()} /> : null}
      </div>
   );
}

export default App;
