import { useEffect, useState, useReducer } from "react";
import { shopProducts } from "../../../utils/data";
import { ADD_TO_CART, REMOVE_TO_CART, shopReducers } from "./shopReducer";

const initialState = { carts: [], fav: [{ p: "ABX", price: 10 }] };

const GlobalStateReducer = () => {
  const [products, setProducts] = useState(null);
  const [state, dispatch] = useReducer(shopReducers, initialState);

  useEffect(() => {
    setProducts(shopProducts);
  }, []);

  const addtoproduct = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removetoproduct = (productId) => {
    dispatch({ type: REMOVE_TO_CART, payload: productId });
  };

  return {
    carts: state.carts,
    addtoproduct,
    removetoproduct,
    products,
  };
};

export default GlobalStateReducer;
