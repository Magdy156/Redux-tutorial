import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./actions";
function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              item.amount -= 1;
              return item;
            }
            return item;
          })
          .filter((item) => item.amount > 0),
      };
    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.amount += 1;
            return item;
          }
          return item;
        }),
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case GET_TOTAL:
      let { amount, total } = state.cart.reduce(
        (cartTotal, item) => {
          cartTotal.amount += item.amount;
          cartTotal.total += item.amount * item.price;

          return cartTotal;
        },
        { amount: 0, total: 0 }
      );
      total = total.toFixed(2);

      return { ...state, amount, total };

    default:
      return state;
  }
}

//   if (action.type === DECREASE) {

//   }
//   if (action.type === INCREASE) {

//   if (action.type === CLEAR_CART) {

//   }

//   return state;
// }

export default reducer;
