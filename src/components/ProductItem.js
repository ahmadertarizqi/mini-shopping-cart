import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from './common/Button';

function ProductItem({ product, addToCart }) {
   const isHover = "hover:-translate-y-1 hover:shadow-md";
   const cardStyles = classnames("mb-3 rounded-lg border border-gray-100 bg-white transform transition", isHover);
   
   return (
      <div className={cardStyles}>
         <figure>
            <img className="w-32 h-32 rounded-full mx-auto" 
               src={require("../assets/img/apples.jpg").default}
               alt="img-product" 
               width="384" 
               height="512" 
            />
         </figure>
         <div className="px-6 pb-6 pt-2 space-y-2">
            <span className="text-gray-800 font-semibold">Rp. {product.price}</span>
            <p className="m-0">{product.name}</p>
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
         </div>
      </div>
   )
}

ProductItem.defaultProps = {
   name: "Product Name",
   price: 15000,
};

ProductItem.propTypes = {
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired
};

export default ProductItem;