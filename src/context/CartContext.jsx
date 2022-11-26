import { createContext, useCallback, useReducer, useState } from 'react';

const cartState ={
  lineItems: [],
  totalAmount: 0
}

const CartContext = createContext({
  lineItems: [],
  totalAmount: 0,
  add: () => {},
  remove: () => {}
});

const totalAmount = (lineItems) => {
  return lineItems.reduce((prevAmount, item) => {
    const price = item.price.sale_price || item.price.original_price;
    return prevAmount + (price * item.quantity)
  }, 0);
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      const product = action.payload;
      let updatedItems;
      if ( state.lineItems.length) {
        const itemIndex = state.lineItems.findIndex(lineItem => lineItem.id === product.id);
        if ( itemIndex !== -1 ) {
          updatedItems = [...state.lineItems];
          updatedItems[itemIndex].quantity++;
        } else {
          updatedItems = [...state.lineItems, product];
        }
      } else {
        updatedItems = [...state.lineItems, product];
      }
      const updatedAmount = totalAmount(updatedItems)
      return {
        lineItems: updatedItems,
        totalAmount: updatedAmount
      };
      break;
    case 'REMOVE':
      const productID = action.payload.id;
      const filteredItems = state.lineItems.filter(lineItem => lineItem.id !== productID);
      if ( filteredItems.length) {
        const updatedAmount = totalAmount(filteredItems);
        return {
          lineItem: filteredItems,
          totalAmount: updatedAmount
        }
      } else {
        return {
          lineItems: [],
          totalAmount: 0
        }
      }
    default: return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartState);

  const handleAddToCart = useCallback( (product) => {
    dispatch({ type: 'ADD', payload: product });
  });

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  }

  const cartContext = {
    lineItems: state.lineItems,
    totalAmount: state.totalAmount,
    add: handleAddToCart,
    remove: handleRemoveItem
  }

  return (
    <CartContext.Provider value={{...cartContext}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;