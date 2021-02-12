import React from 'react';

function useEscapeKeyPress(isState, onEscKeyPress) {
   React.useEffect(() => {
      const keydownHandler = (ev) => {
         if(ev.keyCode === 27 || ev.key === "Escape") {
            onEscKeyPress();
         }
      };

      if(isState) {
         document.addEventListener("keydown", keydownHandler);
      }

      return () => {
         document.removeEventListener("keydown", keydownHandler);
      }
   }, [isState, onEscKeyPress]);
};

export default useEscapeKeyPress;