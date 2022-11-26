import { useContext, useState, useEffect } from 'react';
import CartICon from '../../assets/icon-cart.svg';
import CartContext from '../../context/CartContext';

import classes from './Cart.module.scss';
import CartContent from './CartContent';

const Cart = () => {
	const [showCart, setShowCart] = useState(false);
	const { lineItems, remove } = useContext(CartContext);
	const totalItems = lineItems.length ? lineItems.reduce((prev, item) => prev += item.quantity , 0) : null;

	const toggleCart = () => {
		setShowCart((prevState) => !prevState);
	}

	useEffect(() => {
		if (totalItems && !showCart) {
			setShowCart(true);
		}
	}, [totalItems])
	

	return (
		<div className={classes.cart}>
			<div className={classes.cartIcon} onClick={toggleCart}>
				<img src={CartICon} />
				{totalItems && <span>{totalItems}</span>}
			</div>

			{showCart && <CartContent lineItems={lineItems} remove={remove}/>}
		</div>
	)
}

export default Cart;