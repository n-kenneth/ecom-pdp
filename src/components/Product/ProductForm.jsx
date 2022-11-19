import { useRef, useContext } from "react";
import Button from "../UI/Button/Button";
import Quantity from "../UI/Quantity/Quantity";
// import CartContext from "../../context/CartContext";

import CartIcon from '../../assets/icon-cart.svg';

import classes from './Product.module.scss';


const ProductForm = ({ product, onSubmit }) => {
	const quantityRef = useRef();
	// const cartCtx = useContext(CartContext);

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log(product.id);
	// 	cartCtx.add({
	// 		...product,
	// 		quantity: 1
	// 	})
	// }


	return (
		<form className={classes.productForm} onSubmit={onSubmit}>
			<Quantity ref={quantityRef} />
			<Button type="submit"><img src={CartIcon} /> Add to Cart</Button>
		</form>
	)
}

export default ProductForm;