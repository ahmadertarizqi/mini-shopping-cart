/**
 * 
 * @param {Array.<Object>} items 
 * @param {number} initialValue 
 */
export function calcItemsQuantity(items, initialValue = 0) {
   const result = items.reduce((acc, currentVal) => {
      return acc + currentVal.quantity;
   }, initialValue);

   return result;
};

/**
 * 
 * @param {Array.<Object>} items 
 * @param {number} initialValue 
 */
export function calcTotalPrice(items, initialValue = 0) {
   const result = items.reduce((acc, currentVal) => {
      return acc + (currentVal.price * currentVal.quantity);
   }, initialValue);

   return result;
};