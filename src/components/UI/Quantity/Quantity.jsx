import { forwardRef, useReducer } from 'react';
import MinusIcon from '../../../assets/icon-minus.svg'
import PlusIcon from '../../../assets/icon-plus.svg'

import classes from './Quantity.module.scss';

const quantityReducer = (state, action) => {
	switch(action.type) {
		case 'INCREMENT': return { quantity: state.quantity + 1 };
		case 'DECREMENT':
			if ( state.quantity === 1) return state;
			return { quantity: state.quantity - 1 }
		case 'CHANGE': return { quantity: +action.payload.quantity }
		default: return state;
	}
}

const Quantity = forwardRef((props, ref) => {
	const [state, dispatch] = useReducer(quantityReducer, { quantity: 1 });

	const handleChange = (event) => {
		const value = event.target.value;
		dispatch({ 
			type: 'CHANGE',
			payload: { quantity: value } 
		});
	}

	return (
		<div className={classes.container}>
			<button onClick={() => dispatch({ type: 'DECREMENT'})} type="button"><img src={MinusIcon} alt="minus icon" /></button>
			<input value={state.quantity} onChange={handleChange} ref={ref} />
			<button onClick={() => dispatch({ type: 'INCREMENT'})} type="button"><img src={PlusIcon} alt="plus icon" /></button>
		</div>
	)
});



export default Quantity;