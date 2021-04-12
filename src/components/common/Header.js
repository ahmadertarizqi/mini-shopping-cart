import { useEffect, useState } from "react";
import { Cart } from "../icons";
import { useCartConsumer } from '../../contexts/cartContext';
import { useProductsConsumer } from '../../contexts/productsContext';
import { calcItemsQuantity } from '../../utils';
import DropdownMenu from "./DropdownMenu";

function Header({ cartPanel }) {
   const { cartState } = useCartConsumer();
   const { state, dispatcher } = useProductsConsumer();
   const [menuSelected, setMenuSelected] = useState(state.categories[0]);
   const itemCount = calcItemsQuantity(cartState.cart);

   const handleFilterByCategory = (value) => {
      setMenuSelected(value);
      dispatcher({ type: "FILTER_BY_CATEGORY", payload: value });
   };

   return (
      <header className="w-full fixed top-0 inset-x-0 z-20 shadow-md h-14 bg-white">
         <div className="max-w-lg my-0 mx-auto h-full flex items-center justify-between">
            <h3 className="flex-grow text-left text-xl font-semibold pr-4">Shopping Carts</h3>
            <div className="flex">
               <DropdownMenu 
                  options={state.categories}
                  selected={menuSelected}
                  onSelectedChange={handleFilterByCategory}
               />
               <div className="mx-2 border-l"></div>
               <button className="flex-none w-10 h-10 relative flex items-center justify-center">
                  <Cart 
                     width="2rem" 
                     height="2rem" 
                     onClick={() => cartPanel()}
                  />
                  {itemCount > 0 ?
                     <span className="flex items-center justify-center absolute top-0 right-0 w-5 h-5 rounded-full bg-green-500 text-white text-xs pointer-events-none">
                        {itemCount}
                     </span>
                     : null
                  }
               </button>
            </div>
         </div>
      </header>
   )
}

export default Header;