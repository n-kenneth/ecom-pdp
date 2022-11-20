import { createContext, useCallback, useReducer, useState } from 'react';

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
      let updatedItems;
      if ( state.lineItems.length) {
        const itemIndex = state.lineItems.findIndex(lineItem => lineItem.id === product.id);
        if ( itemIndex !== -1 ) {
          console.log('updated');
          updatedItems = [...state.lineItems];
          console.log(updatedItems[itemIndex].quantity);
          updatedItems[itemIndex].quantity++;
          console.log(updatedItems[itemIndex].quantity);
        } else {
          updatedItems = [...state.lineItems, product];
        }
      } else {
        updatedItems = [...state.lineItems, product];
      }
      console.log(updatedItems)
      // const updatedAmount = updatedItems.reduce((prevAmount, item) => prevAmount + (item.price * item.quantity), 0);
      return {
        lineItems: updatedItems,
        totalAmount: 0
      }
    default: return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartState);

  // const [state, setCartState] = useState(cartState);

  const handleAddToCart = useCallback( (product) => {
    // let updatedItems;
    //   if ( state.lineItems.length) {
    //     const itemIndex = state.lineItems.findIndex(lineItem => lineItem.id === product.id);
    //     if ( itemIndex !== -1 ) {
    //       updatedItems = [...state.lineItems];
    //       updatedItems[itemIndex].quantity += 1;
    //     } else {
    //       updatedItems = state.lineItems.push(product);
    //     }
    //   } else {
    //     updatedItems = state.lineItems.concat(product);
    //   }
    //   console.log(updatedItems);
    // setCartState(prevState => {
    //   return {
    //     ...prevState,
    //     lineItems: updatedItems
    //   }
    // })
    dispatch({ type: 'ADD', payload: product });
  });

  // const cartContext = {
  //   lineItems: state.lineItem,
  //   totalAmount: state.totalAmount,
  //   add: handleAddToCart
  // }

  return (
    <CartContext.Provider value={{...state, add: handleAddToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;