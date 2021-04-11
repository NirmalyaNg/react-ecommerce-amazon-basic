export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        const oldBasket = state.basket;
        const newBasket = oldBasket.filter((item, i) => i !== index);

        return {
          ...state,
          basket: newBasket,
        };
      } else {
        console.warn("Cant find item in basket to remove");
      }
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
