import { createContext, useReducer } from "react";
import reducer from "./reducer";
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  const increaseQty = (item) => {
    dispatch({ type: "INCREMENT_QTY", payload: item });
  };
  const decreaseQty = (item) => {
    dispatch({ type: "DECREMENT_QTY", payload: item });
  };
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
