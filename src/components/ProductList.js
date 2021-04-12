import ProductItem from "./ProductItem";
import * as types from "../contexts/constants";
import { useCartConsumer } from '../contexts/cartContext';
import { useProductsConsumer } from "../contexts/productsContext";


function ProductList() {
   const { cartState, dispatch } = useCartConsumer();
   const { state } = useProductsConsumer();

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

   const productsResult = (state.productsFiltered.length > 0) ? state.productsFiltered : state.products;

   return (
      <div className="flex flex-wrap mb-4 -mx-2">
         {productsResult.map((product) => (
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