import { useRef, useContext } from "react";
import Button from "../UI/Button/Button";
import Quantity from "../UI/Quantity/Quantity";
import CartContext from "../../context/CartContext";

import CartIcon from '../../assets/icon-cart.svg';

import classes from './Product.module.scss';


const ProductForm = ({ product }) => {
	const quantityRef = useRef();
	const cartCtx = useContext(CartContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		cartCtx.add({
			...product,
			quantity: +quantityRef.current.value
		})
	}


	return (
		<form className={classes.productForm} onSubmit={handleSubmit}>
			<Quantity ref={quantityRef} />
			<Button type="submit"><img src={CartIcon} /> Add to Cart</Button>
		</form>
	)
}

export default ProductForm;