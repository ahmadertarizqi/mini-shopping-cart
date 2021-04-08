import { Cart } from "../icons";
import { useCartConsumer } from '../../contexts/cartContext';
import { calcItemsQuantity } from '../../utils';
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const menuCategory = [
   { label: 'All' },
   { label: 'Shirt' },
   { label: 'Jacket' },
   { label: 'Shoes' }
];

function Header({ cartPanel }) {
   const [menuSelected, setMenuSelected] = useState(menuCategory[0]);
   const { cartState } = useCartConsumer();
   const itemCount = calcItemsQuantity(cartState.cart);   

   return (
      <header className="w-full fixed top-0 inset-x-0 z-20 shadow-md h-14 bg-white">
         <div className="max-w-lg my-0 mx-auto h-full flex items-center justify-between">
            <h3 className="flex-grow text-left text-xl font-semibold pr-4">Shopping Carts</h3>
            <div className="flex">
               <DropdownMenu 
                  options={menuCategory}
                  selected={menuSelected}
                  onSelectedChange={setMenuSelected}
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