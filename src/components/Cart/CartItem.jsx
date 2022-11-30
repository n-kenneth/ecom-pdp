import DeleteIcon from '../../assets/icon-delete.svg';
import classes from './Cart.module.scss';

const CartItem = ({ item, remove }) => {
  const { title,  images, quantity, price } = item;
  let lastPrice = price.sale_price ? price.sale_price : price.orginal_price;
  const totalPrice = lastPrice * quantity;

  return (
    <div className={classes.carItem}>
      <div className={classes.cartImage}>
        <img src={images[0].main} alt="product image" />
      </div>
      <div className={classes.cartInfo}>
        <div className={classes.cartTitle}>{title}</div>
        <div className={classes.cartPrice}>
          <span>${lastPrice.toFixed(2)} x { quantity }</span> <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className={classes.cartDelete} onClick={remove}>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  )
}

export default CartItem;