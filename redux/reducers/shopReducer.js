import * as ACTIONS from "../constants";
import initialState from "./initialState";

const shopReducer = (state = initialState.shopCart, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
     
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
        // console.log("new item");
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
        // console.log("update item");
      }
      return [...updatedCart];

    case ACTIONS.REMOVE_TO_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
        // console.log("delete item");
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
        // console.log("reduce item");
      }
      return [...updatedCart];
    default:
      return state;
  }
};

export default shopReducer;
