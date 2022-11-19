import Button from "../UI/Button/Button";
import Quantity from "../UI/Quantity/Quantity";

import CartIcon from '../../assets/icon-cart.svg';

import classes from './Product.module.scss';


const ProductForm = () => {
	return (
		<form className={classes.productForm}>
			<Quantity />
			<Button><img src={CartIcon} /> Add to Cart</Button>
		</form>
	)
}

export default ProductForm;