import { createContext } from "react";
const defaultContext = {
  carts: [],
  addtoproduct: (product) => {},
  removetoproduct: (productId) => {},
  // test: "test"
};

export const ShopContext = createContext();

// {
//   cart: [],
//   addtoproduct: (product) => {},
//   removetoproduct: (productId) => {},
// }
