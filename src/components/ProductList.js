import ProductItem from "./ProductItem";
import datas from "../services/products.json";
import { useCartConsumer } from '../contexts/cartContext';
import * as types from "../contexts/constants";

const { products } = datas;

function ProductList() {
   const { cartState, dispatch } = useCartConsumer();

   const addToCartAction = (item) => {
      const findItemInCart = cartState.cart.find(val => val.id === item.id);
      if(!findItemInCart) {
         dispatch({ type: types.ADD_ITEM, payload: item });
      } else if (findItemInCart) {
         if(findItemInCart.quantity >= findItemInCart.stock) {
            alert('Stock item is empty');
         } else {
            dispatch({ type: types.ADD_ITEM, payload: item });
         }
      }
   };

   return (
      <div className="flex flex-wrap mb-4 -mx-2">
         {products.map((product) => (
            <div key={product.id} className={`w-1/2 px-2`}>
               <ProductItem
                  product={product}
                  addToCart={addToCartAction}
               />
            </div>
         ))}
      </div>
   )
};

export default ProductList;