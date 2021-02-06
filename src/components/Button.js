import PropTypes from 'prop-types';

function Button({ children }) {
   return (
      <button className="py-2 px-4 text-sm font-medium rounded shadow-md text-white bg-green-500 hover:bg-green-700">
         {children}
      </button>
   )
};

Button.propTypes = {
   children: PropTypes.node.isRequired
};

Button.defaultProps = {
   color: "bg-green-500",
   textColor: "text-white"
};


export default Button;