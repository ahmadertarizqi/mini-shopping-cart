import classnames from 'classnames';
import CounterItem from './CounterItem';

function CartItem({ cartItem, increaseItem, decreaseItem }) {
   const isHover = "hover:shadow";
   const cardItemStyles = classnames("bg-white p-3 rounded mb-2 border border-gray-100 transform transition flex items-center", isHover);
   
   return (
      <div className={cardItemStyles}>
         <img src={require("../assets/img/apples.jpg").default} 
            className="w-16 h-16"
            alt="img-cart-item"
         />
         <div className="space-y-2 w-full">
            <p className="text-base leading-tight mb-2">{cartItem.name}</p>
            <small>Item Price: Rp. {cartItem.price} </small>
            <div className="flex items-center justify-between">
               <CounterItem 
                  className="flex-none" 
                  countValue={cartItem.quantity}
                  cartItemID={cartItem.id}
                  increaseItem={increaseItem}
                  decreaseItem={decreaseItem}
               />
               <p className="text-sm flex-grow pr-2 font-semibold text-right">
                  Rp. {cartItem.price * cartItem.quantity}
               </p>
            </div>
         </div>
      </div>
   )
}

export default CartItem;