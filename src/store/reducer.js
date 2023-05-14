const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id ? { ...prod, qty: prod.qty + 1 } : prod
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        cart: state.cart
          .map((prod) =>
            prod.id === action.payload.id
              ? { ...prod, qty: prod.qty - 1 }
              : prod
          )
          .filter((prod) => prod.qty > 0),
      };
    default:
      break;
  }
};
export default reducer;
