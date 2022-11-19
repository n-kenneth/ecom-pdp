import { createContext, useReducer } from 'react';

const cartState ={
  lineItems: [],
  totalAmount: 0
}

const CartContext = createContext({
  lineItems: [],
  totalAmount: 0,
  add: () => {}
});

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      const product = action.payload;
      console.log(product);
      let updatedItems;
      if ( state.lineItems.length) {
        const itemIndex = state.lineItems.findIndex(lineItem => lineItem.id === product.id);
        if ( itemIndex !== -1 ) {
          console.log('updated');
          updatedItems = [...state.lineItems];
          updatedItems[itemIndex].quantity += 1;
        } else {
          console.log('new')
          updatedItems = state.lineItems.push(product);
        }
      } else {
        console.log('new')
        updatedItems = state.lineItems.push(product);
      }
      const updatedAmount = updatedItems.reduce((prevAmount, item) => prevAmount + (item.price * item.quantity), 0);
      return {
        lineItems: updatedItems,
        totalAmount: updatedAmount
      }
    default: return state;
  }
}

export const CartContextProvider = ({ children }) => {
;
  const [state, dispatch] = useReducer(cartReducer, cartState);

  const handleAddToCart = (item) => {
    console.log('add')
    dispatch({ type: 'ADD', payload: item });
  }

  const cartContext = {
    lineItems: state.lineItem,
    totalAmount: state.totalAmount,
    add: handleAddToCart
  }

  return (
    <CartContext.Provider value={{...cartContext}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;