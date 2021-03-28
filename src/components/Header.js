import { Cart } from "./Icons";
import { useCartConsumer } from '../contexts/cartContext';
import { calcItemsQuantity } from '../utils';

function Header({ cartPanel }) {
   const { cartState } = useCartConsumer();
   const itemCount = calcItemsQuantity(cartState.cart);
   return (
      <header className="w-full fixed top-0 inset-x-0 z-20 shadow-md h-14 bg-white">
         <div className="max-w-lg my-0 mx-auto h-full flex items-center justify-between">
            <div className="flex-none w-10 h-10"></div>
            <h3 className="flex-grow text-center text-xl font-semibold">Mini Shopping Carts</h3>
            <button className="flex-none w-10 h-10 relative flex items-center justify-center">
               <Cart 
                  width="2rem" 
                  height="2rem" 
                  onClick={() => cartPanel()}
               />
               <span className="flex items-center justify-center absolute top-0 right-0 w-5 h-5 rounded-full bg-green-500 text-white text-xs pointer-events-none">
                  {itemCount > 0 ? itemCount : 0}
               </span>
            </button>
         </div>
      </header>
   )
}

export default Header;