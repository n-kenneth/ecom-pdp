import classes from './Cart.module.scss';
import CartItem from './CartItem';
import Button from '../UI/Button/Button';

const CartContent = ({ lineItems, remove }) => {

  return (
    <div className={classes.cartContent}>
      <div className={classes.cartHeader}>Cart</div>
      <div className={classes.cartBody}>
        {
          lineItems.length ?
          <>
            { lineItems.map(item => <CartItem key={item.id} item={item} remove={() => remove(item.id)} />)}
            <div className={classes.cartAction}>
              <Button>CHECKOUT</Button>
            </div>
          </> : 
          <div className={classes.empty}>Your cart is empty.</div>
        }
      </div>
    </div>
  )
}

export default CartContent;