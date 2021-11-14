import { useEffect, useState, useReducer } from "react";
import { shopProducts } from "../../../utils/data";

const GlobalStateContext = () => {
  const [products, setProducts] = useState(null);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setProducts(shopProducts);
  }, []);
  

  const addtoproduct = (product) => {
    const updatedCart = [...carts];
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
    setCarts(updatedCart);
  };

  const removetoproduct = (productId) => {
    const updatedCart = [...carts];
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
    setCarts(updatedCart);
  };

  return {
    carts,
    addtoproduct,
    removetoproduct,
    products,
  };
};

export default GlobalStateContext;
