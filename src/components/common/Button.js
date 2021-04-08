import PropTypes from 'prop-types';
import classnames from 'classnames';
function Button({ children, className, ...props }) {
   const classes = classnames("py-2 px-4 text-sm font-medium rounded shadow-md text-white bg-green-500 hover:bg-green-700", className);
   return (
      <button className={classes} {...props}>
         {children}
      </button>
   )
};

Button.propTypes = {
   children: PropTypes.node.isRequired
};

Button.defaultProps = {
   color: "bg-green-500"
};


export default Button;