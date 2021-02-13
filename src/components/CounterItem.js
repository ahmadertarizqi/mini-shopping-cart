import PropTypes from 'prop-types';

function CounterItem({ className, countValue, cartItemID, increaseItem, decreaseItem }) {
   return (
      <div className={`flex items-center rounded border border-gray-500 w-24 ${className}`}>
         <button
            className="flex-none w-6 h-6 block-center-middle"
            onClick={() => decreaseItem(cartItemID)}
         >-</button>
         <span className="flex-grow h-6 text-center border-l border-r border-gray-500 text-sm block-center-middle">
            {countValue}
         </span>
         <button
            className="flex-none w-6 h-6 block-center-middle"
            onClick={() => increaseItem(cartItemID)}
         >+</button>
      </div>
   )
};

CounterItem.defaultProps = {
   className: ''
};

CounterItem.propTypes = {
   className: PropTypes.string,
   countValue: PropTypes.number,
   incrementHandler: PropTypes.func,
   decrementHandler: PropTypes.func
};

export default CounterItem;