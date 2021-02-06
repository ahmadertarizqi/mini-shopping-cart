import classnames from 'classnames';

function Cart({ children, isOpen, removeCartPanel }) {

   const panelClasses = classnames({
      "transform transition ease-in-out duration-300": true,
      "translate-x-full": isOpen === false,
      "translate-x-0": isOpen === true
   });

   return (
      <aside className={`fixed inset-y-0 right-0 pl-10 max-w-full flex z-40 ${panelClasses}`}>
         <div className="relative w-screen max-w-sm">

            <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
               <button
                  onClick={() => removeCartPanel()}
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Close panel</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            </div>
            <div className="h-full flex flex-col pb-6 bg-gray-50">
               <div className="flex-none block h-14 bg-white shadow">
                  <div className="px-4 sm:px-6">
                     <h2 className="text-lg font-medium text-gray-900">Panel title</h2>
                  </div>
               </div>
               <div className="relative flex-1 py-5 px-4 sm:px-6 overflow-y-auto overflow-x-hidden">
                  {children}
               </div>
            </div>

         </div>
      </aside>
   )
}

export default Cart;