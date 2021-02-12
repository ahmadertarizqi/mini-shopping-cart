import classnames from 'classnames';
import { useState } from 'react';
import CounterItem from './CounterItem';

function CartItem({ price }) {
   const [qty, setQty] = useState(0);
   const [priceItem, setPriceItem] = useState(price);

   const incrementItem = () => {
      setQty(prevState => prevState + 1);
   };

   const decrementItem = () => {
      if(qty > 0) {
         setQty(prevState => prevState - 1);
      }
   };

   const isHover = "hover:shadow";
   const cardItemStyles = classnames("bg-white p-3 rounded mb-2 border border-gray-100 transform transition flex items-center", isHover);
   
   return (
      <div className={cardItemStyles}>
         <img src={require("../assets/img/apples.jpg").default} 
            className="w-16 h-16"
            alt="img-cart-item"
         />
         <div className="space-y-2">
            <p className="text-base leading-tight mb-2">Safeway Kitchens Sliced Peaches 425ml</p>
            <small>Item Price: Rp. 25000 </small>
            <div className="flex items-center justify-between">
               <CounterItem className="flex-none" 
                  countValue={qty}
                  incrementHandler={incrementItem}
                  decrementHandler={decrementItem}
               />
               <p className="text-sm flex-grow pr-2 font-semibold text-right">Rp. 25000</p>
            </div>
         </div>
      </div>
   )
}

export default CartItem;