import MinusIcon from '../../../assets/icon-minus.svg'
import PlusIcon from '../../../assets/icon-plus.svg'

import classes from './Quantity.module.scss';

const Quantity = () => {
	return (
		<div className={classes.container}>
			<button><img src={MinusIcon} /></button>
			<input value="1" />
			<button><img src={PlusIcon} /></button>
		</div>
	)
}

export default Quantity;