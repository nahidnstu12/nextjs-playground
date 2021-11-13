import { useEffect, useState } from "react";
import { shopProducts } from "../../../utils/data";
import { ShopContext } from "./shopcontext";

const GlobalState = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState(null);
  let updatedCart;
  let updatedItemIndex;
  useEffect(() => {
    setProducts(shopProducts);
  }, []);

  const addtoproduct = (product) => {
    updatedCart = [...carts];
    updatedItemIndex = updatedCart.findIndex((item) => item.id === product.id);

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
    // return [...updatedCart];
  };

  const removetoproduct = (productId) => {
    updatedCart = [...carts];
    updatedItemIndex = updatedCart.findIndex((item) => item.id === productId);
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

  return (
    <ShopContext.Provider
      value={[carts, setCarts, addtoproduct, removetoproduct, products]}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
