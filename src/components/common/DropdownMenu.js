import { useState, useRef, useEffect } from "react";
import classnames from 'classnames';
import * as Icon from "../icons";

function DropdownMenu({ options, selected, onSelectedChange }) {
   const [isOpen, setOpen] = useState(false);
   const refMenu = useRef();

   const classess = classnames({
      "transition ease-out duration-100": true,
      "transform opacity-0 scale-95": isOpen === false,
      "transform opacity-100 scale-100": isOpen === true     
   });

   useEffect(() => {
      const closeDropdown = (ev) => {
         if(refMenu.current.contains(ev.target)) return;
         setOpen(false);
      };

      document.body.addEventListener("click", closeDropdown);
      return () => {
         document.body.removeEventListener("click", closeDropdown);
      };
   }, []);
   

   const renderOptions = options.map(option => {
      return (
         <span 
            key={option.label}
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => onSelectedChange(option)}
         >
            <div className="flex items-center justify-between">
               <span className="flex-grow pr-3">{option.label}</span>
               {(option.label === selected.label) 
                  ? <Icon.Checklist className="w-5 h-5" fill="#10b981" /> 
                  : null
               }
            </div>
         </span>
      );
   });

   return (
      <div ref={refMenu} className="relative inline-block text-left mr-3">
         <div>
            <button 
               type="button" 
               className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true"
               onClick={() => setOpen(!isOpen)}
            >
               Category : {selected.label}
               <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
               </svg>
            </button>
         </div>

         <div className={`${classess} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1" role="none">
               {renderOptions}
            </div>
         </div>
      </div>
   )
};

export default DropdownMenu;