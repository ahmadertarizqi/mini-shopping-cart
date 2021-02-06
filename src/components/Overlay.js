function Overlay({ remove }) {
   return (
      <div className="w-full h-full fixed inset-0 z-30 bg-black bg-opacity-25 transition-opacity"
         onClick={() => remove()}
      ></div>
   )
}

export default Overlay;