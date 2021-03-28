import classnames from 'classnames';
import CounterItem from './CounterItem';
import { TimesRounded } from './Icons';

function CartItem({ cartItem, increaseItem, decreaseItem, removeItem }) {
   const isHover = "hover:shadow";
   const cardItemStyles = classnames("relative bg-white p-3 rounded mb-2 border border-gray-100 transform transition flex items-center", isHover);
   
   return (
      <div className={cardItemStyles}>
         <img src={require("../assets/img/apples.jpg").default} 
            className="w-16 h-16"
            alt="img-cart-item"
         />
         <div className="space-y-2 w-full">
            <p className="text-base leading-tight mb-2 pr-8">{cartItem.name}</p>
            <small className="block">Item Price: Rp. {cartItem.price} </small>
            <small className="block">Stock: {cartItem.stock} 
               {cartItem.quantity >= cartItem.stock 
                  ? <em className="ml-2">(Max purchase of product is {cartItem.stock} items)</em>
                  : null
               }
            </small>
            <div className="flex items-center justify-between">
               <CounterItem 
                  className="flex-none" 
                  cartItem={cartItem}
                  increaseItem={increaseItem}
                  decreaseItem={decreaseItem}
               />
               <p className="text-sm flex-grow pr-2 font-semibold text-right">
                  Rp. {cartItem.price * cartItem.quantity}
               </p>
            </div>
         </div>
         <button
            className="absolute top-3 right-2 z-10"
            onClick={() => removeItem(cartItem.id)}
         >
            <TimesRounded width="24px" height="24px" />
         </button>
      </div>
   )
}

export default CartItem;