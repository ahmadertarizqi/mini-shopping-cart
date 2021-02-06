import React from 'react';
import Cart from './components/Cart';
import Header from "./components/Header";
import Overlay from './components/Overlay';
import ProductCard from "./components/ProductCard";

function App() {
   const [openCart, setOpenCart] = React.useState(false);

   const toggleCartPanel = () => {
      setOpenCart(!openCart);
      if(!openCart) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'initial';
      }
   };

   return (
      <div className="max-w-lg my-0 mx-auto">
         <Header cartPanel={toggleCartPanel} />
         <main className="container mx-auto px-0 pb-6 pt-14">
            <div className="py-5">
               <div className="flex flex-wrap mb-4 -mx-2">
                  {[1, 2, 3, 4, 5].map((idx) => (
                     <div key={idx} className={`w-1/2 px-2`}>
                        <ProductCard />
                     </div>
                  ))}
               </div>
            </div>
         </main>
         <Cart isOpen={openCart} removeCartPanel={toggleCartPanel}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo doloribus possimus nam sint molestias aspernatur. In dolorum suscipit quasi deleniti pariatur ratione alias dolores quam, laudantium quas placeat laboriosam vel facilis neque libero facere dolor nisi voluptatem rerum perspiciatis vero accusamus doloremque? Et quos similique quo commodi reprehenderit totam itaque dolore, doloremque rerum temporibus ab nam accusamus atque quisquam suscipit nihil assumenda esse reiciendis unde enim? Molestiae eveniet enim quod repellendus quia sapiente sed tempore ullam nulla! Ea ratione repellendus ex est numquam accusantium blanditiis nesciunt animi accusamus libero voluptas vitae at quidem aperiam ab sequi excepturi, earum nihil quia.
         </Cart>
         {openCart ? <Overlay remove={toggleCartPanel} /> : null}
      </div>
   );
}

export default App;
