import Button from './Button';
import classNames from 'classnames';

function ProductCard() {
   const isHover = "hover:-translate-y-1 hover:shadow-md";
   const cardStyles = classNames("mb-3 rounded-lg border border-gray-100 bg-white transform transition", isHover);
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
            <span className="text-gray-800 font-semibold">Rp. 250000</span>
            <p className="m-0">Safeway Kitchens Sliced Peaches 425ml</p>
            <Button>Add to cart</Button>
         </div>
      </div>
   )
}

export default ProductCard;