import { createContext } from "react";
const context = {
  carts: [],
  addtoproduct: (product) => {},
  removetoproduct: (productId) => {},
  test: "test"
};
export const ShopContext = createContext();

// {
//   cart: [],
//   addtoproduct: (product) => {},
//   removetoproduct: (productId) => {},
// }
