import CartItem from "./CartItem";

function CartList({ items, increaseItem, decreaseItem }) {
   return (
      <div className="flex-1 py-5 px-3 overflow-y-auto overflow-x-hidden">
         {items.length > 0 ?
            items.map(item => (
               <CartItem key={item.id}
                  cartItem={item}
                  increaseItem={increaseItem}
                  decreaseItem={decreaseItem}
               />
            ))
            :
            <div className="h-full flex items-center justify-center">
               <p className="font-semibold">Cart is Empty</p>
            </div>
         }
      </div>
   )
};

export default CartList;