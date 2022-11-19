import classes from './Button.module.scss';

const Button = ({ children  }) => (
	<button className={classes.button}>{children}</button>
);

export default Button;