// shop redux
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export const shopReducers = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return addtocart(action.payload, state);
    case REMOVE_TO_CART:
      return removetocart(action.payload, state);
    default:
      return state;
  }
};

export const addtocart = (product, state) => {
  const updatedCart = [...state.carts];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  //   return [...updatedCart];
  return { ...state, carts: updatedCart };
};

export const removetocart = (productId, state) => {
  const updatedCart = [...state.carts];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
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

  return { ...state, carts: updatedCart };
};
// not everything thats broken was meant to be fixed
