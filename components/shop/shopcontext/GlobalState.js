import { useEffect, useState } from "react";
import { shopProducts } from "../../../utils/data";
import { ShopContext } from "./shopcontext";

const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: "1",
      title: "Islami Akida",
      price: "350",
    },
    {
      id: "2",
      title: "Inferno",
      price: "150",
    },
  ]);
//   const [products, setProducts] = useState(null);
//   useEffect(() => {
//     setProducts(shopProducts);
//   }, []);
  const test = "test";
  const addtoproduct = (product) => console.log(product);
  const removetoproduct = (productId) => console.log(productId);
  const shopObj = {
    // addtoproduct,
    // removetoproduct,
    test,
    // cart
  }
  return (
    <ShopContext.Provider value={shopObj}>
      {children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
