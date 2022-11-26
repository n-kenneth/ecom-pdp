import classes from './Button.module.scss';

const Button = ({ children, type  }) => (
	<button type={type} className={classes.button}>{children}</button>
);

export default Button;